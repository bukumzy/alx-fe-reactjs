import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return <p>Viewing Post with ID: {postId}</p>;
}
