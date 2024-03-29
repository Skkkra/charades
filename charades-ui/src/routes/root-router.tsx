import Page404 from '@components/page-404';
import Test from '@components/test';
import DefaultLayout from '@layouts/default-layout';
import { PATH } from '@utils/paths';
import { RouteObject } from 'react-router-dom';

export const RootRouter: RouteObject = {
  path: PATH.ROOT,
  element: (
    <>
      <DefaultLayout />
    </>
  ),
  children: [
    {
      index: true,
      element: <Test />,
    },
    { path: '*', element: <Page404 /> },
  ],
};
