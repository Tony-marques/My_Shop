import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/home/HomePage.tsx";
import OrderPage from "../components/pages/order/OrderPage.tsx";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/order",
      element: <OrderPage />,
   },
]);
