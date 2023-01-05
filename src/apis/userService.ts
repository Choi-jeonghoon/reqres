import customAxios from './index';

// export const getUserById = async (id: number) => {
//   const res = await customAxios.get(`/api/users/${id}`);

//   return res.data;
// };
export const getUserById = async () => {
  const res = await customAxios.get(`/api/users/`);

  return res.data;
};
