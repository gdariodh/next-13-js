import React from "react";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("Error al cargar los comentarios");

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
      <ul style={{ fontSize: 12, background: "#444", padding: 24 }}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4> Title Comment: {comment.title}</h4>
            <small>Body Comment: {comment.body}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
