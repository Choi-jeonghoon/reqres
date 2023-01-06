import React, { useEffect, useState } from 'react';
import { UserType } from '../types/userType';
import { getUserByPage } from '../apis/userPagination';

const useMainPage = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(1);
  //main에 보여주는 데이터값을 페이징클릭할때마다 페이지에 맞게 뿌려줘야되기 때문에 여기에서 부터 시작한다.
  const [users, setUsers] = useState<Array<UserType.User>>([]);

  useEffect(() => {
    (async () => {
      const res = await getUserByPage(page);
      setUsers(res.data.data);
      setTotalPageNumber(res.data.total_pages);
    })();
  }, [page]);

  return { page, users, totalPageNumber, setPage };
};

export default useMainPage;
