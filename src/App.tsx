import {Suspense} from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routes from './routes';
import { NavProvider } from './context/dashboardContext';
import './App.css';
import { AuthProvider } from './context/authContext';


function App() {

  const privateRoutes = routes.privateRoutes.map(({ path, element: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));
  const publicRoutes = routes.publicRoutes.map(({ path, element: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <AuthProvider>
    <NavProvider>
      <Suspense fallback={<div>Loading...</div>}>
      <Toaster position="top-center" />
      <Router>
          <Routes>
            {privateRoutes}
            {publicRoutes}
        </Routes>
       </Router>
    </Suspense>
      </NavProvider>
      </AuthProvider>
  );
}

export default App;
