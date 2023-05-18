import React from "react";
import Counter from "./Counter";

export default function layout({ children }) {
  return (
    <div>
      <Counter />
      <h1>Este es layout de los post</h1>
      {children}
    </div>
  );
}
