import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from 'routes/Layout';
import Search from 'routes/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Search />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
