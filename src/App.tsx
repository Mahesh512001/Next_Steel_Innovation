
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductsDetailPage";
import { navigation } from "./data/navigation.data";
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar navigation={navigation} />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CATEGORY */}
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

