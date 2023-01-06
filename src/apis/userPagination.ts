import customAxios from './index';

export const getUserByPage = async (page: number) => {
  const res = await customAxios.get(`/api/users?page=${page}`);
  return res;
};
