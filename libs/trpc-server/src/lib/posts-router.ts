import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { t } from './trpc';

export interface Post {
  id: string;
  title: string;
  content: string;
}

const posts: Post[] = [];

export const postsRouter = t.router({
  getAllPosts: t.procedure.query(() => posts),
  getPost: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      const post = posts.find((post) => post.id === input.id);
      if (!post) {
        throw new Error('Post not found');
      }
      return post;
    }),
  addPost: t.procedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ input }) => {
      const newPost = {
        id: uuidv4(),
        title: input.title,
        content: input.content,
      };
      posts.push(newPost);
      return newPost;
    }),
  editPost: t.procedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        content: z.string().optional(),
      })
    )
    .mutation(({ input }) => {
      const post = posts.find((p) => p.id === input.id);
      if (!post) {
        throw new Error('Post not found');
      }
      if (input.title !== undefined) {
        post.title = input.title;
      }
      if (input.content !== undefined) {
        post.content = input.content;
      }
      return post;
    }),
  deletePost: t.procedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      const postIndex = posts.findIndex((p) => p.id === input.id);
      if (postIndex === -1) {
        throw new Error('Post not found');
      }
      posts.splice(postIndex, 1);
      return { id: input.id };
    }),
});
