import React from "react";
import Link from "next/link";

const fetchComments = (id) => {
  // incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <>
      <p>Comments</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2> Title Comment: {comment.title}</h2>
            <p>Body Comment: {comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
