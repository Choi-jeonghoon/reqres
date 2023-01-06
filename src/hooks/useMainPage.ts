import React, { useEffect, useState } from 'react';
import { UserType } from '../types/userType';
import { getUserById } from '../apis/userService';

const useMainPage = () => {
  const [users, setUsers] = useState<Array<UserType.User>>([]);

  useEffect(() => {
    (async () => {
      const res = await getUserById();
      console.log('asdasd', res);
      setUsers(res.data);
    })();
  }, []);
  return { users };
};

export default useMainPage;
