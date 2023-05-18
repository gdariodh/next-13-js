import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  );
}
