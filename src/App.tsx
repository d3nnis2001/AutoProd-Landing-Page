import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomepageModular from './HomepageModular';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageModular />,
  },
  {
    path: "/impressum",
    element: <ImpressumPage />,
  },
  {
    path: "/datenschutz",
    element: <DatenschutzPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
