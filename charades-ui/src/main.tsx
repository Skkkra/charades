import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    <App />
  </React.StrictMode>
);
