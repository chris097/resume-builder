import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { NavProvider } from "./context/dashboardContext";
import { AuthProvider } from "./context/authContext";
import logo from "./public/images/cev.png";
import "./App.css";

function App() {
  const privateRoutes = routes.privateRoutes.map(({ path, element: Component }) => <Route key={path} path={path} element={<Component />} />);
  const publicRoutes = routes.publicRoutes.map(({ path, element: Component }) => <Route key={path} path={path} element={<Component />} />);

  return (
    <AuthProvider>
      <NavProvider>
        <Suspense fallback={<div className="flex justify-center h-screen items-center w-full">
          <img className="w-44 h-44 animate-pulse" src={logo} alt="app logo" />
        </div>}>
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
