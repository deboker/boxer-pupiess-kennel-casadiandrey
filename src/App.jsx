import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const OurBoxers = lazy(() => import("./pages/OurBoxers"));
const Litters = lazy(() => import("./pages/Litters"));
const Puppies = lazy(() => import("./pages/Puppies"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const BoxerArt = lazy(() => import("./pages/BoxerArt"));
const ArtworkDetail = lazy(() => import("./pages/ArtworkDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function LegacyHashHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    if (location.hash === "#available") {
      navigate("/puppies", { replace: true });
      return;
    }

    if (location.hash === "#available-8weeks") {
      navigate("/puppies#available-8weeks", { replace: true });
      return;
    }

    if (location.hash === "#contact") {
      navigate("/contact", { replace: true });
      return;
    }

    if (location.hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location, navigate]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <LegacyHashHandler />
      <Suspense fallback={<div className="route-loading">Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="our-boxers" element={<OurBoxers />} />
            <Route path="litters" element={<Litters />} />
            <Route path="puppies" element={<Puppies />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="boxer-art" element={<BoxerArt />} />
            <Route path="boxer-art/:slug" element={<ArtworkDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
