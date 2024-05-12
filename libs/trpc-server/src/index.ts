import { postsRouter } from './lib/posts-router';
import { t } from './lib/trpc';

export const appRouter = t.router({
  posts: postsRouter,
});

export type AppRouter = typeof appRouter;
