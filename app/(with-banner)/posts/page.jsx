import React, { Suspense } from "react";
import ListOfPost from "./ListOfPost";

export default async function page() {
  return (
    <section>
      <Suspense fallback={<p>CARGANDOOO POSTSS...</p>}>
        <ListOfPost />
      </Suspense>
    </section>
  );
}
