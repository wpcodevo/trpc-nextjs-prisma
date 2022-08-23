import { Prisma, Post } from '@prisma/client';
import { prisma } from '../utils/prisma';

export const createPost = async (input: Prisma.PostCreateInput) => {
  return (await prisma.post.create({
    data: input,
  })) as Post;
};

export const findPost = async (
  where: Partial<Prisma.PostWhereInput>,
  select?: Prisma.PostSelect
) => {
  return (await prisma.post.findFirst({
    where,
    select,
  })) as Post;
};

export const findUniquePost = async (
  where: Prisma.PostWhereUniqueInput,
  select?: Prisma.PostSelect
) => {
  return (await prisma.post.findUnique({
    where,
    select,
  })) as Post;
};

export const findAllPosts = async (
  page: number, limit: number,
) => {
  const take = limit || 10;
  const skip = (page - 1 ) * limit
  return (await prisma.post.findMany({
    include: {user: true},
    skip,
    take,
  })) as Post[];
};


export const updatePost = async (
  where: Partial<Prisma.PostWhereUniqueInput>,
  data: Prisma.PostUpdateInput,
  select?: Prisma.PostSelect
) => {
  return (await prisma.post.update({ where, data, select })) as Post;
};

export const deletePost = async (where: Prisma.PostWhereUniqueInput)=> {
  return await prisma.post.delete({where})
}
