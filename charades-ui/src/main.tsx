import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    <App />
  </React.StrictMode>
);
