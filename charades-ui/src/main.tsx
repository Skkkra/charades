import './index.scss';

import DefaultLayout from '@layouts/default-layout';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  </React.StrictMode>
);
