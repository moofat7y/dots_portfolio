import "./styles/app.css";
import "react-toastify/dist/ReactToastify.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Signin from "./components/auth/Signin";
import MainLayout from "./layouts/MainLayout";
import { useSelector } from "react-redux";
import Popular from "./pages/Popular";
import Logo from "./pages/Logo";
import Social from "./pages/Social";
import TopClients from "./pages/TopClients";
import Brand from "./pages/Brand";

function App() {
  const { token } = useSelector((state) => state.auth);
  const ProtecteRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/register" />;
    }
    return children;
  };

  return (
    // <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<AuthLayout />}>
          <Route path="/register" element={<Signin />} />
        </Route>

        <Route
          path="/"
          element={
            <ProtecteRoute>
              <MainLayout />
            </ProtecteRoute>
          }
        >
          <Route path="/" element={<Popular />} />
          <Route path="/populer" element={<Popular />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/social" element={<Social />} />
          <Route path="/top-clients" element={<TopClients />} />
          <Route path="/brand" element={<Brand />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // </Suspense>
  );
}

export default App;
