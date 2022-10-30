import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "~/server/routers/app.routes";
import { createContext } from "~/server/createContext";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
