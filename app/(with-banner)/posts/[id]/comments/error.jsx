"use client";

import React from "react";

export default function Error() {
  return (
    <p
      style={{
        background: "red",
        color: "white",
        padding: 16,
        marginTop: 4,
        borderRadius: 4,
      }}
    >
      {" "}
      x ha ocurrido un error{" "}
    </p>
  );
}
