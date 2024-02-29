import Auth from '@components/auth';
import { PATH } from '@utils/paths';
import { RouteObject } from 'react-router-dom';

export const RootRouter: RouteObject = {
  path: PATH.ANY,
  element: <Auth />,
};
