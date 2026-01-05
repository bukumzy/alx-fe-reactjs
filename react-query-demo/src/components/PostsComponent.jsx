import { useQuery } from "@tanstack/react-query";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json());
}

export default function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={() => refetch()}>Refetch Posts</button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
