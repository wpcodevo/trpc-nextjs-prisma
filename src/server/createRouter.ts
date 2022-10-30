import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { Context } from "./createContext";

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource",
    });
  }
  return next();
});

export const protectedProcedure = t.procedure.use(isAuthed);
