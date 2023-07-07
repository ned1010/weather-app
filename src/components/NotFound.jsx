import React, { useState, useEffect } from "react";

function NotFound() {
  const [countdown, setCountDown] = useState(5);

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      setCountDown((prevCount) => prevCount - 1);
    }, 500);
    return () => clearInterval(countDownInterval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location = "/";
    }
  }, [countdown]);

  return (
    <div className="error">
      <h3>Not Found: Invalid Request</h3>
      <h4>Redirecting in {countdown}s</h4>
    </div>
  );
}

export default NotFound;
