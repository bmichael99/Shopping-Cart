// Root.jsx
import { useState } from "react";
import App from "./App";
import ShoppingDirectory from "./ShoppingDirectory";
import { Outlet } from "react-router-dom";

function Root() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Outlet context={{ cart, setCart }} />
    </div>
  );
}

export default Root;