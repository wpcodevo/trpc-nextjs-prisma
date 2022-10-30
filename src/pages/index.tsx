import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../client/components/Header";
import Message from "../client/components/Message";
import PostItem from "../client/components/posts/post.component";
import useStore from "../client/store";
import { trpc } from "../client/utils/trpc";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      requireAuth: true,
      enableAuth: true,
    },
  };
};

const HomePage: NextPage = () => {
  const store = useStore();
  const { data: posts, isLoading } = trpc.getPosts.useQuery(
    { limit: 10, page: 1 },
    {
      select: (data) => data.data.posts,
      onSuccess: (data) => {
        store.setPageLoading(false);
      },
      onError(error) {
        store.setPageLoading(false);
        toast(error.message, {
          type: "error",
          position: "top-right",
        });
      },
    }
  );

  useEffect(() => {
    if (isLoading) {
      store.setPageLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen py-12">
        <div>
          {posts?.length === 0 ? (
            <Message>There are no posts at the moment</Message>
          ) : (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
              {posts?.map((post: any) => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
