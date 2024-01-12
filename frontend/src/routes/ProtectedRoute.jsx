import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../ContextAndHooks/AuthContext";

export default function ProtectedRoute() {
  const { setToken, setIsLogin } = useAuth();
  const token = localStorage.getItem("token");
  const tokenExpiry = localStorage.getItem("tokenExpiry");
  const currentDate = new Date().getTime();

  useEffect(() => {
    // Check the user's login status
    if (tokenExpiry && currentDate < parseInt(tokenExpiry, 10)) {
      // Token is still valid
      console.log("Token is still valid");
      setToken(token);
      setIsLogin(true);
    } else {
      // Token has expired or not found
      console.log("Token has expired or not found");
    }
  }, []);

  if (!token || !tokenExpiry) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
