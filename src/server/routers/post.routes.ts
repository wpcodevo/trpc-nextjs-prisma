import { protectedProcedure, t } from "../createRouter";
import {
  createPostSchema,
  filterQuery,
  params,
  updatePostSchema,
} from "../schema/post.schema";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  updatePostHandler,
} from "../controllers/post.controller";

const postRouter = t.router({
  createPost: protectedProcedure
    .input(createPostSchema)
    .mutation(({ input, ctx }) => createPostHandler({ input, ctx })),
  updatePost: protectedProcedure
    .input(updatePostSchema)
    .mutation(({ input }) =>
      updatePostHandler({ paramsInput: input.params, input: input.body })
    ),
  deletePost: protectedProcedure
    .input(params)
    .mutation(({ input }) => deletePostHandler({ paramsInput: input })),
  getPost: protectedProcedure
    .input(params)
    .query(({ input }) => getPostHandler({ paramsInput: input })),
  getPosts: protectedProcedure
    .input(filterQuery)
    .query(({ input }) => getPostsHandler({ filterQuery: input })),
});

export default postRouter;