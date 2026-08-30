
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductsDetailPage";
import { navigation } from "./data/navigation.data";
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import ScrollToTop from "./components/common/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar navigation={navigation} />
      <ScrollToTop />
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

      

        {/* CATEGORY */}
        <Route
          path="/category/:slug"
          element={<CategoryPage />}
        />

          {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />
          <Route
          path="/category/:slug"
          element={<CategoryPage />}
        />
        {/* PRODUCT DETAIL */}
        <Route
          path="/product/:id"
          element={<ProductDetailPage />}
        />
  
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

