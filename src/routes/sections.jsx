import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import PostPage from 'src/pages/post';


export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const GalleryPage = lazy(()=>import('src/pages/gallerypg'));
export const UsernamePage = lazy(()=>import('src/pages/UsernameData'));
export const ToDoList = lazy(()=>import ('src/pages/todolist'));
export const StockData = lazy(() =>import ('src/pages/StockData'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },

        { path: 'post', element: <PostPage/>},
        
        {path: 'gallery', element:<GalleryPage/>},
        {path: 'UserName', element:<UsernamePage/>},
        {path: 'ToDoList', element: <ToDoList/>},
        {path: 'StockData', element: <StockData/>},
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
