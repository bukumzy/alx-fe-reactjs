import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}
