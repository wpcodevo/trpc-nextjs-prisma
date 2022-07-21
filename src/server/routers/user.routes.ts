import { createRouter } from '../createRouter';
import * as trpc from '@trpc/server';
import { getMeHandler } from '../controllers/user.controller';

const userRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.user) {
      throw new trpc.TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You must be logged in to access this resource',
      });
    }
    return next();
  })
  .query('me', {
    resolve: ({ ctx }) => getMeHandler({ ctx }),
  });

export default userRouter;
