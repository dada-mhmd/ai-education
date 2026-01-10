'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { UserDetailContext } from '@/context/userDetailsContext';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    const result = await axios.post('/api/user', {});
    setUserDetail(result?.data);
  };

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <div className='max-w-7xl mx-auto'>{children}</div>
      </UserDetailContext.Provider>
    </div>
  );
};

export default Provider;
