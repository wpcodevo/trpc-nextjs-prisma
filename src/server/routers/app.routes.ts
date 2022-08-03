import { createRouter } from '../createRouter';
import redisClient from '../utils/connectRedis';
import authRouter from './auth.routes';
import userRouter from './user.routes';

export const appRouter = createRouter()
  .query('hello', {
    resolve: async (ctx) => {
      const message = await redisClient.get('trpc');
      return { message };
    },
  })
  .merge('auth.', authRouter)
  .merge('users.', userRouter);

export type AppRouter = typeof appRouter;
