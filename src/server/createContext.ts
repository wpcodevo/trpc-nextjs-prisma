import { inferAsyncReturnType } from "@trpc/server";
import { NextApiRequest, NextApiResponse } from "next";
import { deserializeUser } from "./middleware/deserializeUser";

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return deserializeUser({ req, res });
}

export type Context = inferAsyncReturnType<typeof createContext>;
