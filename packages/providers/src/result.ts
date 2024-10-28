/**
 * https://www.oklink.com/docs/en/#support-errors-and-api-status
 * Result class that wraps API responses from OKLink Api
 * Contains status code, message and typed data payload
 *
 * Status codes:
 * - '0': Success
 * - '50000': Body can not be empty.
 * - '50001': Service temporarily unavailable, please try again later.
 * ....
 *
 * @template T The type of the data payload
 */

import { z } from 'zod';

export interface ResultOption<T> {
  code: string;
  msg: string;
  data: T;
}

export class Result<T> {
  #code: string;
  #msg: string;
  #data: T;
  #schema?: z.Schema;

  /**
   * Creates a new Result instance from a raw API response object
   * @param response The raw API response containing code, msg and data
   * @returns A new Result instance wrapping the response data
   * @example
   * ```typescript
   * const rawResponse = {
   *   code: '0',
   *   msg: 'Success',
   *   data: { foo: 'bar' }
   * };
   * const result = Result.from(rawResponse);
   * ```
   */
  static from<T>({ code, msg, data }: ResultOption<T>) {
    return new Result({ code, msg, data });
  }

  constructor({ code, msg, data }: ResultOption<T>) {
    this.#code = code;
    this.#msg = msg;
    this.#data = data;
  }

  schema(sch: z.Schema) {
    this.#schema = sch;
  }

  /**
   * Returns true if the result represents a successful operation with code '0'
   * @returns {boolean} True if operation was successful, false otherwise
   */
  isOk(): boolean {
    return this.#code === '0';
  }

  /**
   * Validates the data payload against a Zod schema if one is set
   * @returns {boolean} True if validation passes or no schema set, false if validation fails
   * @example
   * ```typescript
   * const schema = z.object({ foo: z.string() });
   * const result = new Result({
   *   code: '0',
   *   msg: 'Success',
   *   data: { foo: 'bar' }
   * });
   * result.schema(schema);
   * console.log(result.isValid()); // true
   * ```
   */
  isValid(): boolean {
    return this.#schema?.parse(this.#data);
  }

  /**
   * Returns the status code of the result
   * @returns {string} The status code
   */
  get code(): string {
    return this.#code;
  }

  /**
   * Returns the message describing the result of the operation
   * @returns {string} The result message
   */
  get msg(): string {
    return this.#msg;
  }

  /**
   * Returns the data the result
   * @returns {T} The data
   */
  get data(): T {
    return this.#data;
  }

  /**
   * Returns the data payload of the result or throw msg
   * @returns {T} The result data of type T
   */
  getOrThrow(): T {
    if (!this.isOk()) throw new Error(this.#msg);
    return this.#data;
  }
}
