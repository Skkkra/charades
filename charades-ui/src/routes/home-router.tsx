import Auth from '@components/auth';
import { PATH } from '@utils/paths';
import HomeView from '@views/home-view';
import { RouteObject } from 'react-router-dom';

export const HomeRouter: RouteObject = {
  path: PATH.HOME,
  element: (
    <>
      <Auth />
      <HomeView />
    </>
  ),
  children: [],
};
