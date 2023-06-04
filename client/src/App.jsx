import "./scss/app.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import Loading from "./pages/Loading";
import ArrowTop from "./components/ArrowTop";
import { getAllPopImages } from "./store/features/populer/popSlice";
import { getAllLogoImages } from "./store/features/logo/logoSlice";
import { getAllSocialImages } from "./store/features/social/socialSlice";
import { getAllClientImages } from "./store/features/top-client/clientSlice";
import WhatsApp from "./components/WhatsApp";
import { getAllBrandImages } from "./store/features/brand/brandSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPopImages({ query: "limit=9" }));
    dispatch(getAllLogoImages({ query: "limit=9" }));
    dispatch(getAllSocialImages({ query: "limit=9" }));
    dispatch(getAllBrandImages({ query: "limit=9&sort=category" }));
    dispatch(getAllClientImages({ query: "" }));
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <WhatsApp />
        <ArrowTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
