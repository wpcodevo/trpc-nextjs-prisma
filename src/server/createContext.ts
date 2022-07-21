import { NextApiRequest, NextApiResponse } from 'next';
import { deserializeUser } from './middleware/deserializeUser';

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return deserializeUser({ req, res });
}

export type Context = ReturnType<typeof createContext>;
