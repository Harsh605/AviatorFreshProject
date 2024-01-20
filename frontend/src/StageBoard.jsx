import React, { useRef, useState, useEffect } from "react";
import CanvasAnimation from "./Canvas";
import { useBetContext } from "./ContextAndHooks/BetContext";
import { useSocket } from "./ContextAndHooks/SocketContext";
const StageBoard = () => {
  const stateRef = useRef(null);
  const socket = useSocket();
  const { state, dispatch } = useBetContext();
  const [seconds, setSeconds] = useState(0);
  const { planeCrashed, gameStarted, planeValue } = state;
  /// ===== plane number listen =====
  useEffect(() => {
    if (socket) {
      socket.on("planeCounter", (value) => {
        // setCounter(value);
        dispatch({ type: "planeValue", payload: value });
        if (value !== 0) {
          dispatch({ type: "gameStarted", payload: true });
        }
        if (value === 0) {
          dispatch({ type: "gameStarted", payload: false });
          socket.emit("newBetTime", Date.now());
        }
      });
    }
  }, [socket]);
  useEffect(() => {
    if (socket) {
      socket.on("gameStarted", (boolean) =>
        dispatch({ type: "gameStarted", payload: boolean })
      );
    }
  }, [socket, dispatch]);

  useEffect(() => {
    if (planeCrashed) {
      setTimeout(
        () => dispatch({ type: "planeCrashed", payload: false }),
        5000
      );
    }
  }, [planeCrashed]);
  return (
    <div className="stage-board" ref={stateRef}>
      <div className="counter-num text-center" id="auto_increment_number_div">
        {planeCrashed && (
          <div
            className="secondary-font f-40 flew_away_section mb-2"
            style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
          >
            FLEW AWAY!
          </div>
        )}
        {gameStarted && (
          <div
            id="auto_increment_number"
            className={`${planeCrashed ? "text-danger" : ""}`}
          >
            {planeValue}
            <span>X</span>
          </div>
        )}
      </div>
      <img src="images/bg-rotate-old.svg" className="rotateimage" />
      <CanvasAnimation stateRef={stateRef} />
      {/* <PreLoader /> */}
    </div>
  );
};

export default StageBoard;
