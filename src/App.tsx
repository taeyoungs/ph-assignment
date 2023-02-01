import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QDProvider } from 'quantumic-design';

import Layout from 'routes/Layout';
import Search from 'routes/Search';
import EnrolledRepositories from 'routes/EnrolledRepositories';
import Issues from 'routes/Issues';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Search />} loader={Search.loader} />
      <Route path="repositories" element={<EnrolledRepositories />} />
      <Route path="issues" element={<Issues />} />
    </Route>
  )
);

function App() {
  return (
    <QDProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </QDProvider>
  );
}

export default App;
