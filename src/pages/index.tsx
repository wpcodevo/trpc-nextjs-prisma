import type { NextPage } from 'next';
import Header from '../client/components/Header';

export const getServerSideProps = async () => {
  return {
    props: {
      requireAuth: false,
      enableAuth: false,
    },
  };
};

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <section className='bg-ct-blue-600 min-h-screen pt-20'>
        <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center'>
          <p className='text-5xl font-semibold'>Home Page</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
