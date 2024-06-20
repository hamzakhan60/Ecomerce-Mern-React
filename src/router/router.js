// src/routes.js
import Product from '../Pages/Products.js';
import AdminOrderHistory from '../Pages/Orders.js';
import Customer from "../Pages/Customers.js";
import MenCards from '../Pages/MenCards.js';
import WomenCards from '../Pages/WomenCards.js';
import SalesCards from '../Pages/SalesCards.js';
import NewArrivalCards from '../Pages/NewArrivalCards.js';
import KidsCards from '../Pages/KidsCards.js';
import FragrancesCards from '../Pages/FragrancesCards.js';
import DetailPage from '../Pages/DetailPage.js';
import OrderHistory from '../Pages/orderHistory.js';
import Profile from "../Pages/profile.js";
import AccountVerification from '../Pages/AccountVerification.js';
import Sidebar from '../Pages/Sidebar.js';

export const adminRoutes = [
    
  { path: "/admin/dashboard", element: <Sidebar /> },
  { path: "/admin/products", element: <Product /> },
  { path: "/admin/orders", element: <AdminOrderHistory /> },
  { path: "/admin/customers", element: <Customer /> },
];

export const userRoutes = [
  { path: "/orderHistory", element: <OrderHistory /> },
  { path: "/profile", element: <Profile /> },
  { path: "/", element: <SalesCards /> },
  { path: "/new-arrival", element: <NewArrivalCards /> },
  { path: "/men", element: <MenCards /> },
  { path: "/women", element: <WomenCards /> },
  { path: "/kids", element: <KidsCards /> },
  { path: "/fragrances", element: <FragrancesCards /> },
  { path: "/details/:_id", element: <DetailPage /> },
  { path: "/login", element: <AccountVerification /> },
];
