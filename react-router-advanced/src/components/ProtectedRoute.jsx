import { Navigate } from "react-router-dom";


function useAuth() {
  const user = null;
  return { isAuthenticated: !!user };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
