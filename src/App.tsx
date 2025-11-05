import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomepageModular from './LandingPage';
import ImpressumPage from './subpages/ImpressumPage';
import DatenschutzPage from './subpages/DatenschutzPage';

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
], {
  basename: '/AutoProd-Landing-Page'
});

function App() {
  return <RouterProvider router={router} />
}

export default App
