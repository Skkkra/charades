import { Outlet } from 'react-router';

export default function DefaultLayout() {
  return (
    <main className="mx-auto max-w-[1400px] flex flex-col w-full text-[2.4rem]">
      <Outlet />
    </main>
  );
}
