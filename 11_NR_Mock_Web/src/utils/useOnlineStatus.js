import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      console.log(
        "Navigator status changed to:",
        navigator.onLine ? "online" : "offline"
      );
      setStatus(navigator.onLine);
    };

    console.log("Adding event listeners for online and offline events");

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
  });

  console.log("Initial status:", status);

  return status;
};

export default useOnlineStatus;
