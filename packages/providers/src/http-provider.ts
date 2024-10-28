/**
 *  The available providers should suffice for most developers purposes,
 *  but the [[HttpProvider]] class has many features which enable
 *  sub-classing it for specific purposes.
 *
 *  @_section: api/providers/abstract-provider: Subclass Provider  [abstract-provider]
 */

import axios, { type AxiosRequestConfig, type AxiosInstance } from 'axios';
import { Result } from './result.js';

/**
 *  Options for configuring some internal aspects of an [[HttpProvider]].
 *
 *  **``cacheTimeout``** - how long to cache a low-level ``_perform``
 *  for, based on input parameters. This reduces the number of calls
 *  to getChainId and getBlockNumber, but may break test chains which
 *  can perform operations (internally) synchronously. Use ``-1`` to
 *  disable, ``0`` will only buffer within the same event loop and
 *  any other value is in ms. (default: ``250``)
 */
export type HttpProviderOptions = {
  baseUrl?: string;
  keys: string[];
  // eslint-disable-next-line no-unused-vars
  getAccesskey?: (keys: string[]) => string | undefined;
  // cacheTimeout?: number;
};

/**
 *  An **HttpProvider** provides a base class for other sub-classes to
 *  implement the [[Provider]] API by normalizing input arguments and
 *  formatting output results as well as tracking events for consistent
 *  behavior on an eventually-consistent network.
 */
export class HttpProvider {
  #client: AxiosInstance;

  #options: Required<HttpProviderOptions>;

  /**
   *  Create a new **HttpProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(options?: HttpProviderOptions) {
    this.#options = Object.assign(
      {
        baseUrl: 'https://www.oklink.com',
        keys: [],
        getAccesskey: (keys: string[]) => {
          if (!keys?.length) return;
          return keys[Math.floor(Math.random() * keys.length)];
        },
      },
      options || {}
    );
    this.#client = axios.create({
      baseURL: this.#options.baseUrl,
    });
  }

  /**
   * Get the configured API keys for this provider
   */
  get keys(): string[] {
    return this.#options.keys || [];
  }

  /**
   * https://www.oklink.com/docs/zh/#quickstart-guide-api-authentication
   * ```typescript
   * { headers: { 'Ok-Access-Key': **accessKey** } };
   * ```
   */
  private getApiConfig(accessKey?: string): AxiosRequestConfig | undefined {
    if (!accessKey) return;
    return { headers: { 'Ok-Access-Key': accessKey } };
  }

  /**
   * Makes a GET request to the specified endpoint with optional query parameters.
   * @param endpoint - The API endpoint to call
   * @param init - Optional query parameters to include in the URL
   * @returns Promise that resolves with the response data
   */
  async sendRequest<T = any>(endpoint: string, init?: Record<string, any>): Promise<Result<T>> {
    const key = this.#options.getAccesskey(this.keys);
    const config = this.getApiConfig(key);
    let url = endpoint;
    if (url) url += `?${new URLSearchParams(init).toString()}`;
    const { data } = await this.#client.get(url, config);
    return Result.from(data);
  }
}
