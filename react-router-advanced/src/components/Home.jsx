import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/profile/details">Profile Details</Link> |{" "}
        <Link to="/profile/settings">Profile Settings</Link> |{" "}
        <Link to="/post/123">Post 123</Link>
      </nav>
    </div>
  );
}
