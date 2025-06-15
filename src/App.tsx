import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/Customer/LandingPage";
import Layout from "./pages/Customer/Layout";
import Products from "./pages/Customer/Products";
import SavingsPlan from "./pages/Customer/SavingsPlan";
import AboutUs from "./pages/Customer/AboutUs";
import Contact from "./pages/Customer/Contact";
import ProductDetails from "./pages/Customer/ProductDetails";
import Cart from "./pages/Customer/Cart";
import Wishlist from "./pages/Customer/Wishlist";
import Checkout from "./pages/Customer/Checkout";
import ResetPassword from "./components/Auth/ResetPassword";
import Auth from "./pages/Auth";

// USER IMPORTS
import UserLayout from "./pages/User/UserLayout";
import UserDashboard from "./components/User/Dashboard/UserDashboard";
import UserOrderHistory from "./pages/User/UserOrderHistory";
import TrackOrder from "./pages/User/TrackOrder";
import OrderDetails from "./pages/User/OrderDetails";
import Settings from "./pages/User/Settings";

// ADMIN IMPORTS
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminSavingsPlan from "./pages/Admin/AdminSavingsPlan";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminCustomers from "./pages/Admin/AdminCustomers";
import AdminAllProducts from "./pages/Admin/AdminAllProducts";
import AdminCategoriesProducts from "./pages/Admin/AdminCategoriesProducts";
import AdminInventoryProducts from "./pages/Admin/AdminInventoryProducts";

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* USER ROUTES */}
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<UserDashboard />} />
              <Route
                path="/user/order-history"
                element={<UserOrderHistory />}
              />
              <Route path="/user/track-order" element={<TrackOrder />} />
              <Route path="/user/track-order/:id" element={<OrderDetails />} />
              <Route path="/user/settings" element={<Settings />} />
            </Route>
          </Route>

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/savings-plan" element={<AdminSavingsPlan />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/customers" element={<AdminCustomers />} />
            <Route path="/admin/products" element={<AdminAllProducts />} />
            <Route
              path="/admin/products-categories"
              element={<AdminCategoriesProducts />}
            />
            <Route
              path="/admin//products-inventories"
              element={<AdminInventoryProducts />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
