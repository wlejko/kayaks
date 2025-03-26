import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { routes } from './utils/routes.tsx';
import { AppLayout } from './shared/components/AppLayout/AppLayout.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>test</StrictMode>
);
