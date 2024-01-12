import React from "react";
import { useAuth } from "../ContextAndHooks/AuthContext";
import { Link } from "react-router-dom";

const Referral = () => {
  const { user } = useAuth();

  return (
    <div className="container mt-5">
      <div className="card shadow-lg mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4">Your Referral Cart</h2>
          {/* CSRF token - you might need to handle this differently in React */}
          <input type="hidden" name="_token" value={"kjsdfklhasdf"} />

          <p className="card-text mb-4">Your Referral Code: {user?.code}</p>
          <p className="card-text mb-4" style={{ fontSize: "16px" }}>
            Share your Referral URL:
            <br />
            <Link
              to={`${process.env.REACT_APP_CLIENT_URL}/auth/register?ref=${user?.code}`}
              style={{
                color: "#007BFF",
                textDecoration: "underline",
                fontSize: "14px",
                wordBreak: "break-all",
              }}
            >
              {`${process.env.REACT_APP_CLIENT_URL}/auth/register?ref=${user?.code}`}
            </Link>
          </p>
          <small className="text-muted">Thank you for sharing!</small>
        </div>
      </div>
    </div>
  );
};

export default Referral;
