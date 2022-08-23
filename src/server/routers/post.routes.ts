import { createRouter } from '../createRouter';
import * as trpc from '@trpc/server';
import { createPostSchema, filterQuery, params, updatePostSchema } from '../schema/post.schema';
import { createPostHandler, deletePostHandler, getPostHandler, getPostsHandler, updatePostHandler } from '../controllers/post.controller';

  const postRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!(await ctx).user) {
      throw new trpc.TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You must be logged in to access this resource',
      });
    }
    return next();
  })
  .mutation('create', {
    input: createPostSchema,
    resolve: ({ input, ctx }) => createPostHandler({ input, ctx }),
  })
  .mutation('update', {
    input: updatePostSchema,
    resolve: ({ input }) =>
      updatePostHandler({ paramsInput: input.params, input: input.body }),
  })
  .mutation('delete', {
    input: params,
    resolve: ({ input }) => deletePostHandler({ paramsInput: input }),
  })
  .query('getPost', {
    input: params,
    resolve: ({ input }) => getPostHandler({ paramsInput: input }),
  })
  .query('getPosts', {
    input: filterQuery,
    resolve: ({ input }) => getPostsHandler({ filterQuery: input }),
  });

export default postRouter;
