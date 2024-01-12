import React, { useState, useEffect } from "react";
import { postData } from "./../api/ClientFunction";
import { useAuth } from "../ContextAndHooks/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
const AmountTransfer = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [money, setMoney] = useState();
  const [ownPhone, setOwnPhone] = useState();
  useEffect(() => {
    if (user && user.money && user.phone) {
      setMoney(user.money);
      setOwnPhone(user.phone);
    }
  }, [user]);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [promoCodeError, setPromoCodeError] = useState("");

  const handlephoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransfer = (event) => {
    event.preventDefault();
    postData("/user/transfer", { phone, amount, ownPhone })
      .then((response) => {
        console.log(response);
        queryClient.invalidateQueries("userData");
      })
      .catch((error) => {
        console.error("Error transferring amount:", error);
      });
  };

  return (
    <div className="active" id="via-email">
      <form
        className="register-form row w-25"
        style={{ margin: "100px auto 0 auto", color: "white !important" }}
        onSubmit={handleTransfer}
      >
        <h2>Title</h2>
        <div className="col-md-12 col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <span className="material-symbols-outlined bold-icon">badge</span>
            </span>
            <input
              required
              type="text"
              className="form-control ps-0"
              id="phone"
              placeholder="User Id"
              name="phone"
              onChange={handlephoneChange}
              value={phone}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group flex-nowrap mb-3 promocode align-items-center">
            <span className="input-group-text" id="addon-wrapping">
              <span className="material-symbols-outlined bold-icon">money</span>
            </span>
            <input
              required
              type="number"
              className="form-control ps-0"
              id="amount"
              placeholder="Amount"
              name="amount"
              onChange={handleAmountChange}
              value={amount}
            />
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="promo_code" id="promo_code_error" className="error">
            {promoCodeError}
          </label>
        </div>
        <button
          type="submit"
          className="btn orange-btn md-btn custm-btn-2 mx-auto mt-3 mb-0 registerSubmit"
        >
          Transfer Now
        </button>
      </form>
    </div>
  );
};

export default AmountTransfer;
