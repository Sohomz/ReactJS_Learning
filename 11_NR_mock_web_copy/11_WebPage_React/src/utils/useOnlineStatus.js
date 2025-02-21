import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

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

    return () => {
      console.log("Removing event listeners for online and offline events");
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  console.log("Initial status:", status);

  return status;
};

export default useOnlineStatus;
