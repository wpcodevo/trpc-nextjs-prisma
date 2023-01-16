import type { NextPage } from "next";
import { useEffect } from "react";
import useStore from "~/client/store";
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
  const store = useStore();
  const { data, isLoading } = trpc.getHello.useQuery(undefined, {
    onSettled() {
      store.setPageLoading(false);
    },
  });

  useEffect(() => {
    store.setPageLoading(true);
  }, [isLoading]);

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
