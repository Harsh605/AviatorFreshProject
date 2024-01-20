import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserSection from "./Components/UserSections/UserSection";
import Dashboard from "./Components/Dashboard";
import Lineicons from "./Components/Icons/Lineicons";
import Boxicons from "./Components/Icons/Boxicons";
import Feathericons from "./Components/Icons/Feathericons";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import Layout from "./Components/LayOuts/Layout";
import AuthLayout from "./Components/LayOuts/AuthLayout";
import LockScreen from "./Components/Authentication/LockScreen";
import Errorfound from "./Components/Errors/404Error";
import Widget from "./Components/Widgets/Widget";
import UserProfile from "./Components/UserProfile/UserProfile";
import FormComponent from "./Components/Dataentry";
import ActiveUser from "./Components/UserSections/ActiveUser";
import Contact from "./Components/Contact";
import SingleUser from "./Components/UserSections/SingleUser";
import GroupUser from "./Components/UserSections/GroupUser";
import Recharge from "./Components/UserSections/Recharge";
import Withdraw from "./Components/UserSections/Withdraw";
import Bank from "./Components/UserSections/Bank";
import Refer from "./Components/Refers/Refer";
import Crashplanned from "./Components/UserSections/Crashplanned";
import ChangePassword from "./Components/Authentication/ChangePassword";
import Allbet from "./Components/UserSections/Allbet";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
      <BrowserRouter>
        <Routes>
          <Route path={`/*`} element={<AuthLayout />}>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="ChangePassword" element={<ChangePassword />} />
            <Route path="LockScreen" element={<LockScreen />} />
            <Route path="*" element={<Errorfound />} />
            <Route path="FormComponent" element={<FormComponent />} />
          </Route>
          <Route path="/*" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="UserSection" element={<UserSection />} />
            <Route path="ActiveUser" element={<ActiveUser />} />
            <Route path="SingleUser" element={<SingleUser />} />
            <Route path="GroupUser" element={<GroupUser />} />
            <Route path="Crashplanned" element={<Crashplanned />} />
            <Route path="Withdraw" element={<Withdraw />} />
            <Route path="Lineicons" element={<Lineicons />} />
            <Route path="Boxicons" element={<Boxicons />} />
            <Route path="Feathericons" element={<Feathericons />} />
            <Route path="Widget" element={<Widget />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="Recharge" element={<Recharge />} />
            <Route path="Bank" element={<Bank />} />
            <Route path="Setting" element={<Refer />} />
            <Route path="Allbet" element={<Allbet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
