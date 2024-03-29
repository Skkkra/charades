import { userAtom } from '@atoms/user/user-atom';
import DefaultLayout from '@layouts/default-layout';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Auth() {
  const { uuid } = useAtomValue(userAtom);
  const savedUuid = localStorage.getItem('user-uuid');
  const [haveUserUuid] = useState(savedUuid || uuid);

  return haveUserUuid ? <DefaultLayout /> : <Navigate to="/" replace />;
}
