import { memo, useCallback, useState, useEffect } from "react";
import { postData } from "./api/ClientFunction";
import { useBetContext } from "./ContextAndHooks/BetContext";
import Modal from "react-modal";
import { FaRegPlayCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "./ContextAndHooks/AuthContext";
import { useSocket } from "./ContextAndHooks/SocketContext";
const BetControls = memo(() => {
  return (
    <div className="bet-controls">
      <BetButtons id={1} />
      <BetButtons id={2} />
    </div>
  );
});

export default BetControls;

function BetButtons({ id }) {
  const socket = useSocket();
  const { user } = useAuth();
  const phone = user?.phone;
  const [betId1, setBetId1] = useState(NaN);
  const [betId2, setBetId2] = useState(NaN);
  //0 normal bet and 1 for auto bet
  const [betType, setBetType] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cashDecrease, setCashDecrease] = useState(0);
  const [cashIncrease, setCashIncrease] = useState(0);
  const [autoCashOut, setAutoCashOut] = useState(false);
  const [rounds, setRounds] = useState(10);
  const [activeRound, setActiveRound] = useState(0);
  const [autoCashOutValue, setAutoCashOutValue] = useState("2");
  const { state, dispatch } = useBetContext();
  const {
    extraBetAmount1,
    extraBetAmount2,
    gameStarted,
    withdrawn1,
    withdrawn2,
    isLogin,
    isBet1,
    isBet2,
    autoCashOut1,
    autoCashOut2,
    cashIncrease1,
    cashIncrease2,
    cashDecrease1,
    cashDecrease2,
    rounds1,
    rounds2,
    cashOut1,
    cashOut2,
  } = state;
  console.log(state);
  function handleAutoCashOutValue(id) {
    if (id === 1) {
      dispatch({ type: "cashOut1", payload: autoCashOutValue });
    } else {
      dispatch({ type: "cashOut2", payload: autoCashOutValue });
    }
  }

  const autoCashOutHandler = (e, id) => {
    setAutoCashOut(!autoCashOut);
  };
  useEffect(() => {
    if (id === 1) {
      dispatch({ type: "autoCashOut1", payload: autoCashOut });
    } else {
      dispatch({ type: "autoCashOut2", payload: autoCashOut });
    }
  }, [autoCashOut]);

  const handleDecreaseChange = (value) => {
    setCashDecrease(value);
  };
  const handleIncreaseChange = (value) => {
    // You can add validation or other logic here if needed
    setCashIncrease(value);
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function handleStart(e, id) {
    e.preventDefault();
    console.log("hi");
    if (id === 1) {
      dispatch({ type: "rounds1", payload: rounds });
      dispatch({ type: "cashDecrease1", payload: cashDecrease });
      dispatch({ type: "cashIncrease1", payload: cashIncrease });
    } else {
      dispatch({ type: "rounds2", payload: rounds });
      dispatch({ type: "cashDecrease2", payload: cashDecrease });
      dispatch({ type: "cashIncrease2", payload: cashIncrease });
    }
    closeModal();
  }

  async function handleBet(id) {
    try {
      if (gameStarted) {
        toast.error("Game has already started...");
        return;
      }
      const extraBetAmount = id === 1 ? extraBetAmount1 : extraBetAmount2;
      const isBetPlaced = id === 1 ? isBet1 : isBet2;
      if (user?.money > extraBetAmount && !isBetPlaced) {
        const data = { phone, betAmount: extraBetAmount };
        const res = await postData("/bet/place", data);
        if (res.status) {
          dispatch({ type: id === 1 ? "isBet1" : "isBet2", payload: true });
          id === 1 ? setBetId1(res.betId) : setBetId2(res.betId);
          if (socket) {
            socket.emit("betPlaced", 1);
          }
          toast.success("Bet Placed!...");
        }
      } else {
        toast.error("Insufficient Funds!...");
      }
    } catch (error) {
      console.error("Error in handleBet:", error);
      // Handle or log the error as needed
    }
  }

  const handleBetTypeChange = (type) => {
    setBetType(type);
  };

  const bet_amount_decremental = useCallback(
    (id) => {
      if (id === 1) {
        dispatch({ type: "decExtra1" });
      } else {
        dispatch({ type: "decExtra2" });
      }
    },
    [dispatch]
  );

  const bet_amount_incremental = useCallback(
    (id) => {
      if (id === 1) {
        dispatch({ type: "incExtra1" });
      } else {
        dispatch({ type: "incExtra2" });
      }
    },
    [dispatch]
  );

  const select_direct_bet_amount = useCallback(
    (amount, id) => {
      if (id === 1) {
        dispatch({ type: "incExtra1", payload: amount });
      } else {
        dispatch({ type: "incExtra2", payload: amount });
      }
    },
    [dispatch]
  );

  async function handleCashOut(id) {
    if (!gameStarted) {
      toast.error("game is not started yet!..");
      return; // Explicit return to prevent further execution
    }

    const withdrawalKey = `withdrawn${id}`;
    const betIdKey = `betId${id}`;

    if (!withdrawn1) {
      const data = { phone, multiplier: 1.3, betId: betIdKey };
      const res = await postData("/bet/withdraw", data);
      if (res.status) {
        dispatch({ type: withdrawalKey, payload: true });
        toast.success(res.message);
      }
    } else {
      toast.error("Money already debited!...");
    }
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "10000",
    },
  };
  return (
    <div className="bet-control double-bet" id="extra_bet_section">
      <div className="controls">
        <div className="navigation">
          <div className="navigation-switcher">
            <div
              className={`slider bet-btn ${betType === 0 ? "active" : ""}`}
              onClick={() => handleBetTypeChange(0)}
            >
              Bet
            </div>
            <div
              className={`slider auto-btn ${betType === 1 ? "active" : ""}`}
              onClick={() => handleBetTypeChange(1)}
            >
              Auto
            </div>
            <span className="active-line"></span>
          </div>
        </div>
        <div className="first-row auto-game-feature">
          <div className="bet-block">
            <div className="spinner">
              <div className="input">
                <input
                  id="bet_amount"
                  value={id === 1 ? extraBetAmount1 : extraBetAmount2}
                  className="extra_bet_amount"
                  disabled={autoCashOut}
                  onChange={(e) => {
                    // Remove non-numeric characters and validate as a number
                    const value = e.target.value.replace(/[^0-9.]/g, "");

                    // Check if the value is a valid number
                    const parsedValue = parseFloat(value);

                    // Update state only if the input is a valid number
                    if (!isNaN(parsedValue)) {
                      if (id === 1) {
                        dispatch({ type: "incExtra1", payload: parsedValue });
                      } else {
                        dispatch({ type: "incExtra2", payload: parsedValue });
                      }
                    } else {
                      if (id === 1) {
                        dispatch({ type: "incExtra1", payload: 10.0 });
                      } else {
                        dispatch({ type: "incExtra2", payload: 10.0 });
                      }
                    }
                  }}
                />
              </div>
              <div className="qty-buttons">
                <button
                  className="minus"
                  id="extra_minus_btn"
                  onClick={() => bet_amount_decremental(id)}
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <button
                  className="plus"
                  id="extra_plus_btn"
                  onClick={() => bet_amount_incremental(id)}
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
            <div className="bets-opt-list">
              <button
                className="btn btn-secondary btn-sm bet-opt extra_amount_btn"
                onClick={() => select_direct_bet_amount(100, id)}
              >
                <span className="amt">100</span>
                <span className="currency">₹</span>
              </button>
              <button
                className="btn btn-secondary btn-sm bet-opt extra_amount_btn"
                onClick={() => select_direct_bet_amount(200, id)}
              >
                <span className="amt">200</span>
                <span className="currency">₹</span>
              </button>
              <button
                className="btn btn-secondary btn-sm bet-opt extra_amount_btn"
                onClick={() => select_direct_bet_amount(500, id)}
              >
                <span className="amt">500</span>
                <span className="currency">₹</span>
              </button>
              <button
                className="btn btn-secondary btn-sm bet-opt extra_amount_btn"
                onClick={() => select_direct_bet_amount(1000, id)}
              >
                <span className="amt">1000</span>
                <span className="currency">₹</span>
              </button>
            </div>
          </div>
          {id === 1
            ? !isBet1 &&
              !gameStarted && (
                <div className="buttons-block" id="bet_button">
                  <button
                    className="btn btn-success bet font-family-title ng-star-inserted main_bet_btn"
                    id="extra_bet_now"
                    onClick={() => handleBet(id)}
                  >
                    <label className="font-family-title label">BET</label>
                  </button>
                </div>
              )
            : !isBet2 &&
              !gameStarted && (
                <div className="buttons-block" id="bet_button">
                  <button
                    className="btn btn-success bet font-family-title ng-star-inserted main_bet_btn"
                    id="extra_bet_now"
                    onClick={() => handleBet(id)}
                  >
                    <label className="font-family-title label">BET</label>
                  </button>
                </div>
              )}
          {id === 1
            ? gameStarted &&
              !isBet1 && (
                <div className="buttons-block" id="cancle_button">
                  <div
                    className="btn-tooltip f-14 mb-1"
                    id="waiting"
                    // style={{ display: "none" }}
                  >
                    Waiting for next round
                  </div>
                  <button
                    className="btn btn-danger bet font-family-title height-70 ng-star-inserted main_bet_btn"
                    id="extra_cancel_now"
                  >
                    <label className="font-family-title label">
                      Waiting For Next Round
                    </label>
                  </button>
                </div>
              )
            : gameStarted &&
              !isBet2 && (
                <div className="buttons-block" id="cancle_button">
                  <div className="btn-tooltip f-14 mb-1" id="waiting">
                    Waiting for next round
                  </div>
                  <button
                    className="btn btn-danger bet font-family-title height-70 ng-star-inserted main_bet_btn"
                    id="extra_cancel_now"
                    // onClick={() => cancle_now(id)}
                  >
                    <label className="font-family-title label">
                      Waiting For Next Round
                    </label>
                  </button>
                </div>
              )}
          {id === 1
            ? isBet1 &&
              !gameStarted && (
                <div className="buttons-block" id="cashout_button">
                  <button
                    className="btn btn-warning bet font-family-title ng-star-inserted"
                    onClick={() => handleCashOut(id)}
                  >
                    <label className="font-family-title label">CASH OUT</label>
                    <div
                      className="font-family-title label"
                      id="cash_out_amount"
                    ></div>
                  </button>
                </div>
              )
            : isBet2 &&
              !gameStarted && (
                <div className="buttons-block" id="cashout_button">
                  <button
                    className="btn btn-warning bet font-family-title ng-star-inserted"
                    onClick={() => handleCashOut(id)}
                  >
                    <label className="font-family-title label">CASH OUT</label>
                    <div
                      className="font-family-title label"
                      id="cash_out_amount"
                    ></div>
                  </button>
                </div>
              )}
        </div>
        <div className={`text-white ${betType == 0 ? "second-row" : ""}`}>
          <div className=" m-0">
            <div className="d-flex mt-1 mb-1">
              <div
                className=" d-flex align-items-center"
                style={{
                  padding: "2px 32px",
                  borderRadius: "30px",
                  backgroundColor: "#1d7aca",
                }}
                onClick={openModal}
              >
                Auto Play
              </div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <div>
                  <div>
                    <div className="modal-content">
                      <div className="modal-header login-header">
                        <FaRegPlayCircle className="material-symbols-outlined" />
                        <h5 className="modal-title" id="exampleModalLabel">
                          Auto Play Options:
                        </h5>
                      </div>
                      <div className="mx-4 modal-body pt-0">
                        <label id="registerError" className="error"></label>
                        <p className="link-text f-14 email_text text-white">
                          Select Below Options for auto play
                        </p>
                        <form className="login-form" id="forgotPasswordForm">
                          <div className="content">
                            <div
                              className="content-part content-part-1 d-flex gap-4 "
                              style={{
                                alignItems: "Center",
                                justifyContent: "center",
                              }}
                            >
                              <div className="">
                                <div
                                  className=" gap-2"
                                  style={{
                                    alignItems: "Center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span className="fw-bold f-16 mx-2 ">
                                    Number of rounds:
                                  </span>
                                  <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Number of Rounds"
                                  >
                                    {[10, 20, 50, 100].map((value, index) => (
                                      <input
                                        type="button"
                                        key={value}
                                        className={`btn btn-outline-secondary ${
                                          index === activeRound ? "active" : ""
                                        }`}
                                        value={value}
                                        onClick={() => {
                                          setRounds(value);
                                          setActiveRound(index);
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center auto-cashout-line">
                                <span className="me-2 fw-bold f-16">
                                  Auto Cash Out:
                                </span>
                                <div className="d-flex gap-4 align-items-center flex-wrap">
                                  <div className=" text-white form-check form-switch lg-switch d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0"
                                      type="checkbox"
                                      role="cashout"
                                      id="main_checkout"
                                      onChange={(e) => {
                                        autoCashOutHandler(e, id);
                                      }}
                                      checked={autoCashOut}
                                    />
                                  </div>
                                  <div
                                    className="spinner small"
                                    style={{ maxWidth: "100px" }}
                                  >
                                    <div className="input d-flex ">
                                      <input
                                        type="text"
                                        title="value can't be less than 1.5"
                                        required={autoCashOut}
                                        value={autoCashOutValue}
                                        onChange={(e) => {
                                          e.preventDefault();
                                          let inputValue = e.target.value;
                                          inputValue = inputValue.replace(
                                            /[^\d.]/g,
                                            ""
                                          );
                                          const inputLength = inputValue.length;

                                          if (
                                            inputLength > 2 &&
                                            parseFloat(inputValue) < 1.5
                                          ) {
                                            inputValue = "2";
                                          } else if (
                                            parseFloat(inputValue) === 1.0
                                          ) {
                                            toast.error(
                                              "AutoCashOut Value must be greater then 1.5"
                                            );
                                          }

                                          setAutoCashOutValue(inputValue);
                                          handleAutoCashOutValue(id);
                                        }}
                                        className="form-control font-weight-bold"
                                      />

                                      <span
                                        className="material-symbols-outlined font-weight-bold"
                                        style={{
                                          position: "absolute",
                                          right: "10px",
                                          color: "#868e96",
                                        }}
                                      >
                                        close
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "16px",
                            }}
                          >
                            <div>
                              <span className="title text-left pl-1 mr-auto disabled fw-bold f-16">
                                Stop if cash decreases by
                              </span>
                              <div className="spinner  mt-2">
                                <button
                                  type="button"
                                  required
                                  className="spinner-button"
                                  style={{
                                    borderRadius: "100%",
                                    background: "#adb5bd",
                                    padding: "2px 8px",
                                  }}
                                  onClick={() =>
                                    handleDecreaseChange(cashDecrease - 1)
                                  }
                                >
                                  -
                                </button>
                                <div className="input ">
                                  <input
                                    type="text"
                                    required
                                    value={cashDecrease}
                                    onChange={(e) =>
                                      handleDecreaseChange(e.target.value)
                                    }
                                    onInput={(e) =>
                                      (e.target.value = e.target.value.replace(
                                        /[^\d^.]/g,
                                        ""
                                      ))
                                    }
                                    className="font-weight-bold"
                                  />
                                </div>
                                <button
                                  type="button"
                                  className="spinner-button"
                                  style={{
                                    borderRadius: "50%",
                                    background: "#adb5bd",
                                  }}
                                  onClick={() =>
                                    handleDecreaseChange(cashDecrease + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div>
                              <div className="title text-left  mr-auto disabled fw-bold f-16">
                                Stop if cash increases by
                              </div>
                              <div className="spinner  mt-2">
                                <button
                                  type="button"
                                  className="spinner-button"
                                  style={{
                                    borderRadius: "100%",
                                    background: "#adb5bd",
                                    padding: "2px 8px",
                                  }}
                                  onClick={() =>
                                    handleIncreaseChange(cashIncrease - 1)
                                  }
                                >
                                  -
                                </button>
                                <div className="input full-width">
                                  <input
                                    type="text"
                                    value={cashIncrease}
                                    onChange={(e) =>
                                      handleIncreaseChange(e.target.value)
                                    }
                                    onInput={(e) =>
                                      (e.target.value = e.target.value.replace(
                                        /[^\d^.]/g,
                                        ""
                                      ))
                                    }
                                    className="font-weight-bold"
                                  />
                                </div>
                                <button
                                  type="button"
                                  className="spinner-button"
                                  style={{
                                    borderRadius: "50%",
                                    background: "#adb5bd",
                                  }}
                                  onClick={() =>
                                    handleIncreaseChange(cashIncrease + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label id="otp_error" className="error"></label>
                          </div>
                          <button
                            className="btn green-btn md-btn custm-btn-2 mx-auto mt-3 mb-3 w-100"
                            id="processSubmit"
                            onClick={(e) => handleStart(e, id)}
                          >
                            Start
                          </button>
                          <div
                            className="text-white cursor-pointer f-14 mb-2 d-flex justify-content-center"
                            onClick={closeModal}
                            style={{ cursor: "pointer" }}
                          >
                            Cancel
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              <div style={{ display: "flex", gap: "24px" }}>
                <div className=" text-white form-check form-switch lg-switch d-flex align-items-center">
                  <label
                    className="form-check-label f-12 me-1"
                    htmlFor="cashout"
                  >
                    Auto Cash Out
                  </label>

                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    role="cashout"
                    id="main_checkout"
                    onChange={(e) => autoCashOutHandler(e, id)}
                    checked={autoCashOut}
                  />
                </div>
                <div
                  className="spinner small"
                  style={{ maxWidth: "100px", height: "24px" }}
                >
                  <div className="input full-width">
                    <input
                      className="f-16 font-weight-bold"
                      type="text"
                      id="main_incrementor"
                      required={autoCashOut}
                      value={autoCashOutValue}
                      onChange={(e) => {
                        e.preventDefault();
                        let inputValue = e.target.value;
                        inputValue = inputValue.replace(/[^\d.]/g, "");
                        const inputLength = inputValue.length;

                        if (inputLength > 2 && parseFloat(inputValue) < 1.5) {
                          inputValue = "2";
                        } else if (parseFloat(inputValue) === 1.0) {
                          toast.error(
                            "AutoCashOut Value must be greater then 1.5"
                          );
                        }

                        setAutoCashOutValue(inputValue);
                        handleAutoCashOutValue(id);
                      }}
                    />
                    <div className="text text-x">
                      <span className="material-symbols-outlined">close</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
