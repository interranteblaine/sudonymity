import type { AppRouter } from '@sudonymity/trpc-server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

const SERVER_TRPC_URL = 'http://localhost:3333/api';

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: SERVER_TRPC_URL,
      async headers() {
        return {
          authorization: '',
        };
      },
    }),
  ],
});
