
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/root';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
