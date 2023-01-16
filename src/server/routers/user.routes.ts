import { protectedProcedure, t } from "../createRouter";
import { getMeHandler } from "../controllers/user.controller";

const userRouter = t.router({
  getMe: protectedProcedure.query(({ ctx }) => getMeHandler({ ctx })),
});

export default userRouter;
