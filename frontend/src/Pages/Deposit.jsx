import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../ContextAndHooks/AuthContext";
import { generateTransactionId } from "../api/ClientFunction";
import { useLocation } from "react-router-dom";
const Deposit = () => {
  const location = useLocation();
  const [message, setMessage] = useState();
  console.log("🚀 ~ Deposit ~ message:", message);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const errorParam = searchParams.get("error");
    if (errorParam) {
      setMessage(errorParam);
    }
  }, [location.search]);

  useEffect(() => {
    if (
      message ===
      "Transection Sucessfull, Amount Has been added to your account!..."
    ) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }, [message]);

  const { user, gateWayKey } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      depositAmount: "",
    },
  });
  console.log(`${process.env.REACT_APP_API_URL}/admin/getpaymentdetails`)
  const onSubmit = async (data) => {
    console.log(user?.phone);
    const depositData = {
      key: String(gateWayKey),
      p_info: "avaitor",
      customer_mobile: user?.phone,
      customer_email: user?.email,
      customer_name: user?.name,
      amount: data.depositAmount,
      client_txn_id: generateTransactionId(user?.phone),
      redirect_url: `${process.env.REACT_APP_API_URL}/admin/getpaymentdetails`,
    };
    const res = await axios.post(
      "https://api.ekqr.in/api/create_order",
      depositData
    );
    if (res.data.status) {
      toast.success(res.data.msg);
      console.log(res.data);
      window.open(res.data.data.payment_url);
    } else {
      toast.error(res.data.msg);
    }
  };

  return (
    <div
      className="active d-flex justify-content-center"
      style={{ marginTop: "48px" }}
    >
      <form
        className="register-form w-75"
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "white" }}
      >
        <h2>Deposit</h2>

        {/* Deposit Amount Field */}
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">
              <span className="material-symbols-outlined bold-icon">badge</span>
            </span>
            <input
              required
              type="number"
              style={{ color: "white" }}
              className={`form-control ${
                errors.depositAmount ? "is-invalid" : ""
              }`}
              placeholder="Deposit Amount"
              {...register("depositAmount", {
                required: "Deposit amount is required",
              })}
            />
            {errors.depositAmount && (
              <div className="invalid-feedback">
                {errors.depositAmount.message}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn orange-btn md-btn custm-btn-2 mx-auto mt-3 mb-0 registerSubmit"
          id="deposit"
        >
          DEPOSIT
        </button>
      </form>
    </div>
  );
};

export default Deposit;
