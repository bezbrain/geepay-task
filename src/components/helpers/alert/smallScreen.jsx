import React, { useState } from "react";

const SmallScreen = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <div className={`${showPage ? "add__show__page" : ""} small__screen`}>
      <div>
        <p>View on desktop/tablet to see all features</p>
        <button onClick={() => setShowPage(true)}>View anyway</button>
      </div>
    </div>
  );
};

export default SmallScreen;
