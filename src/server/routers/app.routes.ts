import { createRouter } from '../createRouter';
import authRouter from './auth.routes';
import userRouter from './user.routes';

export const appRouter = createRouter()
  .query('hello', {
    resolve: (ctx) => {
      return 'Welcome to tRPC with Next.js';
    },
  })
  .merge('auth.', authRouter)
  .merge('users.', userRouter);

export type AppRouter = typeof appRouter;
