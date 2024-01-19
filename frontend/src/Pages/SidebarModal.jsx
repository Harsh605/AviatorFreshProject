import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../api/query/useUserInfo";
import { useAuth } from "../ContextAndHooks/AuthContext";
import { useSettingContext } from "../ContextAndHooks/SettingContext";

export default function Sidebar() {
  const { dispatch, sound } = useSettingContext();
  const handleSound = () => {
    dispatch({ type: "sound" });
  };
  const { setUser, user, setBank, setGateWayKey } = useAuth();

  const { userData, error, isLoading } = useUserInfo();
  const { setIsLogin } = useAuth();
  useEffect(() => {
    if (userData && userData?.user && userData.status === true) {
      setUser(userData.user);
      setBank(userData.bank);
      setGateWayKey(userData.key);
    }
  }, [userData]);
  function logout() {
    setIsLogin(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    setUser(null);
  }
  return (
    <div className="header-right d-flex align-items-center">
      <Link to="/deposit">
        <button className="deposite-btn rounded-pill d-flex align-items-center me-2">
          <span className="material-symbols-outlined me-2"> payments </span>
          {/* Assuming wallet and user functions are available in your context */}
          <span className="me-2" id="header_wallet_balance">
            {/* ₹{wallet(user("id"))} */}
          </span>
          DEPOSIT
        </button>
      </Link>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-transparent dropdown-toggle p-0 d-flex align-items-center justify-content-center caret-none"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="material-symbols-outlined f-24 menu-icon text-white">
            menu
          </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark profile-dropdown p-0">
          <li className="profile-head d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {/* Assuming user image, email, and id are available in your context */}
              {/* <img
                // src={user("image")}
                className="avtar-ico"
                id="avatar_img"
                alt="avatar"
              /> */}
              <span>{user?.name}</span>
              <div>
                {/* <div className="profile-name mb-1">{user("email")}</div> */}
                <div className="profile-name" id="username">
                  {/* {user("id")} */}
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="f-12 justify-content-between">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico">
                  volume_mute
                </span>
                SOUND
              </div>
              <div>
                <div className="form-check form-switch lg-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="sound"
                    checked={sound}
                    onChange={handleSound}
                  />
                  <label className="form-check-label" htmlFor="sound" />
                </div>
              </div>
            </a>
          </li>
          <li className="divider" />
          <li>
            <Link to="/" className="f-12 justify-content-between">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  flight_takeoff
                </span>
                <img
                  src="../../images/logo.svg"
                  className="side_logo"
                  alt="logo"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/deposit" className="f-12 justify-content-between">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  payments
                </span>
                DEPOSIT FUNDS
              </div>
            </Link>
          </li>
          <li>
            <Link to="/withdraw" className="f-12 justify-content-between">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  payments
                </span>
                WITHDRAW FUNDS FROM THE ACCOUNT
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/amount-transfer"
              className="f-12 justify-content-between"
            >
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  payments
                </span>
                AMOUNT TRANSFER
              </div>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="f-12 justify-content-between">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  account_circle
                </span>
                PERSONAL DETAILS
              </div>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/deposit_withdrawals"
              className="f-12 justify-content-between"
            >
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  payments
                </span>
                TRANSACTION HISTORY
              </div>
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/level-management"
              className="f-12 justify-content-between"
            >
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  payments
                </span>
                LEVEL MANAGEMENT
              </div>
            </Link>
          </li> */}
          <li>
            <Link to="/referal" className="f-12 justify-content-between">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  payments
                </span>
                REFERRAL
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/auth/login"
              onClick={() => logout()}
              className="f-12 justify-content-between"
            >
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined ico f-20">
                  payments
                </span>
                SIGN OUT
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
