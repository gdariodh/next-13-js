import React from "react";
import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  /**  getStaticProps
    return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
   */

  /** getServerSideProps
    return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((response) => response.json());
   */

  // incremental static regeneration
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
};

export default async function ListOfPost() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href="/post/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post?.id} />
      </Link>
    </article>
  ));
}
