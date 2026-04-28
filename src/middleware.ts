import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ locals, request }, next) => {
  locals.requestStart = performance.now();
  const response = await next();
  response.headers.set('x-powered-by', 'Astro + FE Architecture');
  response.headers.set('x-path', new URL(request.url).pathname);
  return response;
};
