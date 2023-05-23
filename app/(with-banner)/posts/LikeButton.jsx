// with 'use client' we can use react hooks in our components (useState, useEffect, etc.)
"use client";

import React, { useState } from "react";

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);

  return <button onClick={() => setLiked(!liked)}>{liked ? "❤" : "♡"}</button>;
}
