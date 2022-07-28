const customConfig: {
  port: number;
  origin: string;
  dbUri: string;
} = {
  port: 8000,
  origin: 'http://localhost:3000',

  dbUri: process.env.DATABASE_URL as string,
};

export default customConfig;
