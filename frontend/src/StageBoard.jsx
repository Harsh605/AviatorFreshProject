import React, { useRef, useState, useEffect } from "react";
import CanvasAnimation from "./Canvas";
import { useBetContext } from "./ContextAndHooks/BetContext";
const StageBoard = () => {
  const stateRef = useRef(null);
  const [counter, setCounter] = useState(1.0);
  const { state, dispatch } = useBetContext();
  const [seconds, setSeconds] = useState(0);
  const { planeCrashed, gameStarted } = state;
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increase the counter by 0.01 (adjust as needed)
      gameStarted?setCounter((prevCounter) => prevCounter + 0.01):setCounter(1.0)
    }, 100); // Increase every second (adjust as needed)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [gameStarted]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increase the counter by 0.01 (adjust as needed)
      if (planeCrashed === true) {
        if (seconds !== 5) {
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          dispatch({ type: "planeCrashed", payload: false });
        }
      }
    }, 1); // Increase every millisecond (adjust as needed)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [planeCrashed, seconds]);
  console.log(planeCrashed);
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
        {!planeCrashed && gameStarted && (
          <div
            id="auto_increment_number"
            className={`${planeCrashed ? "text-danger" : ""}`}
          >
            {counter.toFixed(2)}
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
