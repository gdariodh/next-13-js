import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <marquee style={{ background: "purple", border: 4, width: "100%" }}>
        El mejor canal de &bull; Posts
      </marquee>
      {children}
    </div>
  );
}
