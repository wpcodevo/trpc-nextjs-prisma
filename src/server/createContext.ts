import { NextApiRequest, NextApiResponse } from 'next';

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return null
}

export type Context = ReturnType<typeof createContext>;
