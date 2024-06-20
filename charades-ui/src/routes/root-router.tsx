import Page404 from '@components/page-404';
import DefaultLayout from '@layouts/default-layout';
import { PATH } from '@utils/paths';
import App from 'App';
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
      element: <App />,
    },
    { path: '*', element: <Page404 /> },
  ],
};
