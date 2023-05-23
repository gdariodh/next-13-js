import React from "react";

// TODO: ME QUEDE EN EL MINUTO 1:35:35 -> https://www.youtube.com/watch?v=tA-_vAz9y78

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
