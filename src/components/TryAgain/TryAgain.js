import React from "react";
import { Link } from "react-router-dom";

const tryAgain = () => {
  return (
    <div>
      <h2>Do you want to try one more time?</h2>
      <Link to="/">
        <button>Yes</button>
      </Link>
    </div>
  );
};

export default tryAgain;
