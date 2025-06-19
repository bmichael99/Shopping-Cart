import Root from "./Root";
import App from "./App";
import ShoppingDirectory from "./ShoppingDirectory";
import ShoppingCart from "./ShoppingCart";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // same as path: "/"
        element: <App />,
      },
      {
        path: "/shop",
        element: <ShoppingDirectory />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
];

export default routes;