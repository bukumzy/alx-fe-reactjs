import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return <p>Viewing Blog Post with ID: {id}</p>;
}
