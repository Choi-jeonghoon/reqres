import React, { useEffect, useState } from 'react';
import { UserType } from '../types/userType';
import { getUserById } from '../apis/userService';

const useMainPage = () => {
  const [users, setUsers] = useState<Array<UserType.User>>([]);

  useEffect(() => {
    (async () => {
      const res = await getUserById();
      setUsers(res);
    })();
  }, []);
  return { users };
};

export default useMainPage;
