import React from "react";
import "./App.scss";
import Products from "./pages/products";

// TODO proč se toho importuje tolik s typescriptem

export default function App(): JSX.Element {
  return (
    <>
      <Products />
    </>
  );
}
