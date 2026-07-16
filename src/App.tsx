import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { LoadingScreen } from "./ui/LoadingScreen";

const Home = React.lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const ComoFunciona = React.lazy(() => import("./pages/ComoFunciona").then(module => ({ default: module.ComoFunciona })));
const Proyecto = React.lazy(() => import("./pages/Proyecto").then(module => ({ default: module.Proyecto })));
const CentroAyuda = React.lazy(() => import("./pages/CentroAyuda").then(module => ({ default: module.CentroAyuda })));
const Reglamento = React.lazy(() => import("./pages/Reglamento").then(module => ({ default: module.Reglamento })));
const AvisoPrivacidad = React.lazy(() => import("./pages/AvisoPrivacidad").then(module => ({ default: module.AvisoPrivacidad })));
const GuiaUsuario = React.lazy(() => import("./pages/GuiaUsuario").then(module => ({ default: module.GuiaUsuario })));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/proyecto" element={<Proyecto />} />
            <Route path="/centro-ayuda/:categorySlug?/:articleSlug?" element={<CentroAyuda />} />
            <Route path="/reglamento" element={<Reglamento />} />
            <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
            <Route path="/guia-usuario" element={<GuiaUsuario />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
