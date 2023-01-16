import { t } from "../createRouter";
import redisClient from "../utils/connectRedis";
import authRouter from "./auth.routes";
import postRouter from "./post.routes";
import userRouter from "./user.routes";

const publicRouter = t.router({
  getHello: t.procedure.query(async ({ ctx }) => {
    const message = await redisClient.get("tRPC");
    return { message };
  }),
});

export const appRouter = t.mergeRouters(
  publicRouter,
  authRouter,
  userRouter,
  postRouter
);

export type AppRouter = typeof appRouter;
