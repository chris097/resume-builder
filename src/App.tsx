import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { NavProvider } from "./context/dashboardContext";
import { AuthProvider } from "./context/authContext";
import logo from "./public/images/cev.png";
import "./App.css";
import Loader from "./components/Loading/Loader";

function App() {
  const privateRoutes = routes.privateRoutes.map(({ path, element: Component }) => <Route key={path} path={path} element={<Component />} />);
  const publicRoutes = routes.publicRoutes.map(({ path, element: Component }) => <Route key={path} path={path} element={<Component />} />);

  return (
    <AuthProvider>
      <NavProvider>
        <Suspense fallback={<Loader />}>
          <Toaster position="top-right" containerClassName="text-sm" />
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
