import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { adminApi, session } from "../lib/api";
import useResource from "../hooks/useResource";
export default function ProtectedRoute({ children }) {
  const [expired, setExpired] = useState(false);
  const location = useLocation();
  const profile = useResource("/me", adminApi);
  useEffect(() => {
    const expire = () => setExpired(true);
    window.addEventListener("hanindo:session-expired", expire);
    return () => window.removeEventListener("hanindo:session-expired", expire);
  }, []);
  if (!session.get() || expired)
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  if (profile.loading)
    return (
      <div className="auth-state" role="status">
        Memeriksa sesi…
      </div>
    );
  if (profile.error)
    return (
      <div className="auth-state" role="alert">
        <p>{profile.error}</p>
        <button onClick={profile.reload}>Coba lagi</button>
      </div>
    );
  return children;
}
