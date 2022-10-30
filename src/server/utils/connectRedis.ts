import { createClient } from 'redis';

const redisUrl = `redis://localhost:6379`;
const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    redisClient.set(
      'tRPC',
      'Welcome to tRPC with Next.js, Prisma and Typescript!'
    );
    console.log('🚀 Redis client connected...');
    redisClient.set(
      'tRPC',
      'Welcome to tRPC with Next.js, Prisma and Typescript!'
    );
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

export default redisClient;
