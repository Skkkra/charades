import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import { router } from './router';
import DefaultLayout from '@layouts/default-layout';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  </React.StrictMode>
);
