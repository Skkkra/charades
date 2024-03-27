import { HomeRouter } from '@routes/home-router';
import { RootRouter } from '@routes/root-router';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([RootRouter, HomeRouter], {});
