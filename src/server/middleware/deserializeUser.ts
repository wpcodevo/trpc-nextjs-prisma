import { TRPCError } from '@trpc/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { findUniqueUser } from '../services/user.service';
import redisClient from '../utils/connectRedis';
import { verifyJwt } from '../utils/jwt';

export const deserializeUser = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  try {
    // Get the token
    let access_token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      access_token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.access_token) {
      access_token = req.cookies.access_token;
    }

    const notAuthenticated = {
      req,
      res,
      user: null,
    };

    if (!access_token) {
      return notAuthenticated;
    }

    // Validate Access Token
    const decoded = verifyJwt<{ sub: string }>(
      access_token,
      'accessTokenPublicKey'
    );

    if (!decoded) {
      return notAuthenticated;
    }

    // Check if user has a valid session
    const session = await redisClient.get(decoded.sub);

    if (!session) {
      return notAuthenticated;
    }

    // Check if user still exist
    const user = await findUniqueUser({ id: JSON.parse(session).id });

    if (!user) {
      return notAuthenticated;
    }

    return {
      req,
      res,
      user: { ...user, id: user.id },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};
