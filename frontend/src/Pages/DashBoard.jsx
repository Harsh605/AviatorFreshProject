// ===== start code from here =====
import { useEffect, useState } from "react";
import { useBetContext } from "../ContextAndHooks/BetContext";
import LeftSidebar from "./../LeftSidebar";
import HistoryTop from "./../HistoryTop";
import StageBoard from "./../StageBoard";
import BetParent from "./../BetParent";
import { useLocation } from "react-router-dom";
import PreLoader from "../Preloader";
import { useSocket } from "../ContextAndHooks/SocketContext";
export default function Dashboard() {
  const location = useLocation();
  const dummyAllResults = [{ result: 1.5 }, { result: 2.0 }, { result: 3.5 }];
  useEffect(() => {
    const disableBackButton = () => {
      if (location.pathname === "/") {
        // Disable the back button when on the specified path
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = function () {
          window.history.go(1);
        };
      } else {
        // Restore normal behavior if not on the specified path
        window.onpopstate = null;
      }
    };

    disableBackButton();

    // Cleanup the effect to restore normal behavior when the component is unmounted
    return () => {
      window.onpopstate = null;
    };
  }, [location]);

  return (
    <>
      <div className="dark-bg-main overflow-x-hidden">
        <div className="main-container">
          <LeftSidebar />
          <div className="right-sidebar">
            <div className="game-play">
              <HistoryTop allresults={dummyAllResults} />
              {/* {gameStarted && !planeCrashed && <StageBoard />}
              {planeCrashed && <PreLoader />} */}
              <StageBoard />
              <BetParent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
