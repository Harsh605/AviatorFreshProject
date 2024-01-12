import React from "react";

const HistoryTop = ({ allresults }) => {
  const number_format = (value, decimals) => {
    // Implement your number formatting logic here
    return value.toFixed(decimals); // Sample implementation, replace it with your logic
  };

  return (
    <div className="history-top">
      <div className="stats">
        <div className="payouts-wrapper">
          <div className="payouts-block">
            {allresults &&
              allresults
                .filter(
                  (item) => item.result !== "pending" && item.result !== ""
                )
                .map((item, index) => (
                  <div key={index} className="bg1 custom-badge">
                    {number_format(item.result, 2)}x
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTop;
