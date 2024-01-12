import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RiMessage2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { postData } from "../api/ClientFunction";
import { useAuth } from "../ContextAndHooks/AuthContext";
import { useQueryClient } from "@tanstack/react-query";

const Withdraw = () => {
  const queryClient = useQueryClient();
  const { user, bank } = useAuth();
  const {
    register,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors },
  } = useForm({
    defaultValues: {
      withdrawamount: "", // Set default values here
      bankName: bank?.name_bank || "",
      accountNumber: bank?.account || "",
      upi: bank?.stk || "",
      accountHolderName: bank?.name_user || "",
      ifsc: bank?.ifsc || "",
    },
  });
  const [money, setMoney] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (user && user.money && user.phone) {
      setMoney(user.money);
      setPhone(user.phone);
    }
  }, [user]);

  useEffect(() => {
    // Set default values when bank changes
    setValue("bankName", bank?.name_bank || "");
    setValue("accountNumber", bank?.account || "");
    setValue("upi", bank?.stk || "");
    setValue("accountHolderName", bank?.name_user || "");
    setValue("ifsc", bank?.ifsc || "");
  }, [bank, setValue]);

  const onSubmit = async (data) => {
    // Trim all data values
    const trimmedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value.trim()])
    );
    // Check if money is available
    if (!money) {
      Swal.fire("Error", "Please login to withdraw money", "error");
      return;
    }

    // Check withdrawal conditions
    console.log(trimmedData.withdrawamount);
    if (
      trimmedData.withdrawamount <= money &&
      Number(trimmedData.withdrawamount) >= 250
    ) {
      // Make API call for withdrawal
      const res = await postData("/user/withdraw", { ...trimmedData, phone });

      // Show success or error message based on the API response
      Swal.fire(
        res.status ? "Success" : "Error",
        res.status
          ? "Withdraw request submitted successfully!"
          : "Failed to submit withdraw request",
        res.status ? "success" : "error"
      );
      if (res.status) {
        queryClient.invalidateQueries("userData");
      }
    } else {
      // Show error message for withdrawal conditions not met
      Swal.fire(
        "Error",
        "Minimum withdrawal limit is 250 or Your Wallet has not enough amount",
        "error"
      );
    }
  };

  return (
    <div
      className="active d-flex justify-content-center  "
      id="via-email"
      style={{ marginTop: "48px  " }}
    >
      <form
        className="register-form row w-75"
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "white" }}
      >
        <h2>Withdraw</h2>

        {/* Withdraw Amount Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <span className="material-symbols-outlined bold-icon">badge</span>
            </span>
            <input
              required
              type="number"
              className={`form-control ps-0 ${
                errors.withdrawamount ? "is-invalid" : ""
              }`}
              id="withdrawamount"
              placeholder="Withdraw Amount"
              name="withdrawamount"
              {...register("withdrawamount", {
                required: "Withdraw amount is required",
              })}
            />
            {errors.withdrawamount && (
              <div className="invalid-feedback">
                {errors.withdrawamount.message}
              </div>
            )}
          </div>
        </div>

        {/* Bank Name Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <span className="material-symbols-outlined bold-icon">badge</span>
            </span>
            <input
              required
              type="text"
              className={`form-control ps-0 ${
                errors.bankName ? "is-invalid" : ""
              }`}
              id="bankName"
              placeholder="Bank Name"
              name="bankName"
              {...register("bankName", { required: "Bank name is required" })}
            />
            {errors.bankName && (
              <div className="invalid-feedback">{errors.bankName.message}</div>
            )}
          </div>
        </div>

        {/* Account Number Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <span className="material-symbols-outlined bold-icon">badge</span>
            </span>
            <input
              required
              type="text"
              className={`form-control ps-0 ${
                errors.accountNumber ? "is-invalid" : ""
              }`}
              id="accountNumber"
              placeholder="Account Number"
              name="accountNumber"
              {...register("accountNumber", {
                required: "Account number is required",
              })}
            />
            {errors.accountNumber && (
              <div className="invalid-feedback">
                {errors.accountNumber.message}
              </div>
            )}
          </div>
        </div>

        {/* UPI Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <RiMessage2Line className="material-symbols-outlined bold-icon" />
            </span>
            <input
              required
              type="text"
              className={`form-control ps-0 ${errors.upi ? "is-invalid" : ""}`}
              id="upi"
              placeholder="UPI"
              name="upi"
              {...register("upi", { required: "UPI is required" })}
            />
            {errors.upi && (
              <div className="invalid-feedback">{errors.upi.message}</div>
            )}
          </div>
        </div>

        {/* Account Holder Name Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <RiMessage2Line className="material-symbols-outlined bold-icon" />
            </span>
            <input
              required
              type="text"
              className={`form-control ps-0 ${
                errors.accountHolderName ? "is-invalid" : ""
              }`}
              id="accountHolderName"
              placeholder="Account Holder Name"
              name="accountHolderName"
              {...register("accountHolderName", {
                required: "Account holder name is required",
              })}
            />
            {errors.accountHolderName && (
              <div className="invalid-feedback">
                {errors.accountHolderName.message}
              </div>
            )}
          </div>
        </div>

        {/* IFSC Field */}
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <RiMessage2Line className="material-symbols-outlined bold-icon" />
            </span>
            <input
              required
              type="text"
              className={`form-control ps-0 ${errors.ifsc ? "is-invalid" : ""}`}
              id="ifsc"
              placeholder="IFSC"
              name="ifsc"
              {...register("ifsc", { required: "IFSC is required" })}
            />
            {errors.ifsc && (
              <div className="invalid-feedback">{errors.ifsc.message}</div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn orange-btn md-btn custm-btn-2 mx-auto mt-3 mb-0 registerSubmit"
          id="withdraw"
        >
          WITHDRAW
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
