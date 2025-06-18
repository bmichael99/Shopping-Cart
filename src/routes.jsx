import App from "./App";
import ShoppingDirectory from './ShoppingDirectory'

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <ShoppingDirectory />,
  },
];

export default routes;