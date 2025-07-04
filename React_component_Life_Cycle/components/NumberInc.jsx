import React, { useEffect } from "react";

const NumberInc = ({ num, setNum }) => {
  {
    console.log("Component Rendered");
  }

  useEffect(() => {
    console.log("componentDidMount called using useEffect to achieve this");

    // Cleanup function
    return () => {
      console.log("Component cleaned up");
    };
  }, []);

  useEffect(() => {
    console.log("Number got updated");
  }, [num]);

  function incNumber() {
    setNum(num + 1);
  }

  return (
    <div>
      <h1>NumberInc</h1>
      <button onClick={incNumber}>Click me</button>
    </div>
  );
};

export default NumberInc;
