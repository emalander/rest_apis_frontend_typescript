import { hydrateRoot } from 'react-dom/client';

import LoadingSpinner from './components/LoadingSpinner';
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom' 
import './index.css'

  hydrateRoot(
    document.getElementById('root')!,
    <StrictMode>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>,
);

