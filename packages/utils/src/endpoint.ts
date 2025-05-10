import { HttpEndpoint } from '@titanlabjs/types';

export function toHttpEndpoint(endpoint: string | HttpEndpoint): HttpEndpoint {
  if (typeof endpoint === 'string') {
    return {
      url: endpoint,
      headers: {},
    };
  }
  return endpoint;
}
