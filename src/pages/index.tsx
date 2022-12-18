import type { NextPage } from "next";
import Header from "../client/components/Header";
import { trpc } from "../client/utils/trpc";

export const getServerSideProps = async () => {
  return {
    props: {
      requireAuth: false,
      enableAuth: false,
    },
  };
};

const HomePage: NextPage = () => {
  const { data } = trpc.getHello.useQuery();

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">{data?.message}</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
