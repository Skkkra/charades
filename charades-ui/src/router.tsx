import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { Home } from './views/home/home';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export const router = createBrowserRouter([{ path: '*', Component: Root }]);
