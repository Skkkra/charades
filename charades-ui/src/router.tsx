import { createBrowserRouter } from 'react-router-dom';
import { RootRouter } from '@routes/root-router';
import { HomeRouter } from '@routes/home-router';

export const router = createBrowserRouter([RootRouter, HomeRouter], {});
