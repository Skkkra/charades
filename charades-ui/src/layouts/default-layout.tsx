import { ReactNode } from 'react';

type DefaultLayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main className="mx-auto max-w-[1400px] flex flex-col w-full">
      <div>{children}</div>
    </main>
  );
}
