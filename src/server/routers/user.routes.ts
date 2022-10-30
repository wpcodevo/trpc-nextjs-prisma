import { t } from "../createRouter";
import * as trpc from "@trpc/server";
import { getMeHandler } from "../controllers/user.controller";

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new trpc.TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource",
    });
  }
  return next();
});

export const protectedProcedure = t.procedure.use(isAuthed);

const userRouter = t.router({
  getMe: protectedProcedure.query(({ ctx }) => getMeHandler({ ctx })),
});

export default userRouter;
