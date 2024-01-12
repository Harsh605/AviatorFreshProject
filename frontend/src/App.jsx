import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/DashBoard";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import Register from "./Pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import SignIn from "./Pages/SignIn";
import { useSocket } from "./ContextAndHooks/SocketContext";
import { useAuth } from "./ContextAndHooks/AuthContext";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import AmountTransfer from "./Pages/AmountTransfer";
import Profile from "./Pages/Profile";
import Referral from "./Pages/Referrel";
export default function App() {
  const socket = useSocket();
  const { user } = useAuth();
  useEffect(() => {
    if (socket && user) {
      // Emit user ID when the component mounts
      socket.emit("userid", user.phone);
    }
  }, [ user?.phone]); // Dependency array ensures that the effect runs only when the socket or user.phone changes
  return (
    <Router>
      <Routes>
        <Route index path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<SignIn />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/withdraw" element={<Withdraw/>}/>
            <Route path="/amount-transfer" element={<AmountTransfer/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/referal" element={<Referral/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
