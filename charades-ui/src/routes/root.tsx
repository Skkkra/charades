import { Route, Routes } from 'react-router-dom';
import { Home } from '../views/home/home';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
