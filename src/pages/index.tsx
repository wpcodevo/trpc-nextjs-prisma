import type { NextPage } from 'next';
import { trpc } from '../client/utils/trpc';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello']);
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </div>
  );
};

export default Home;
