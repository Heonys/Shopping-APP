import { createBrowserRouter } from "react-router-dom";
import App from "App";
import Product from "components/Product";
import ProductDetail from "components/ProductDetail";
import Cart from "components/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>에러 페이지</div>,
    children: [
      { index: true, element: <Product /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
