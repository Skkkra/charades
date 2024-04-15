import Auth from '@components/auth';
import { PATH } from '@utils/paths';
import HomeView from '@views/home-view';
import App from 'App';
import { RouteObject } from 'react-router-dom';

export const HomeRouter: RouteObject = {
  path: PATH.HOME,
  id: 'home-router',
  element: (
    <>
      <Auth />
    </>
  ),
  children: [
    {
      index: true,
      element: (
        <>
          <HomeView />
          <App />
        </>
      ),
    },
  ],
};
