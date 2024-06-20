import { userAtom } from '@atoms/user/user-atom';
import { useAtomValue } from 'jotai';
import { lazy,Suspense } from 'react';
import { Outlet } from 'react-router';

const Chat = lazy(() => import('@components/chat/chat'));

export default function DefaultLayout() {
  const { uuid } = useAtomValue(userAtom);
  return (
    <main className="h-[100vh] w-full overflow-hidden bg-gradient-to-br from-black-300 to-black-400 p-10">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[1fr_0.45fr] grid-rows-[1fr] text-[2.4rem]">
        <div>
          <Outlet />
        </div>
        <Suspense>{!!uuid && <Chat />}</Suspense>
      </div>
    </main>
  );
}
