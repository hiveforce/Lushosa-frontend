import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import SavingsPlan from "./pages/SavingsPlan";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="max-w-[1500px] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/saving-plan" element={<SavingsPlan />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
