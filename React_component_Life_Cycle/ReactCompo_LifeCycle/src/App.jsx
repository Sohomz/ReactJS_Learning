import { useState } from "react";
import NumberInc from "../../components/NumberInc";

function App() {
  const [num, setNum] = useState(0);
  const [showComponent, setShowComponent] = useState(true); // State to control showing the component

  return (
    <>
      <h1>{num}</h1>
      {showComponent && <NumberInc num={num} setNum={setNum} />}
      <button onClick={() => setShowComponent(false)}>
        Remove or create NumberInc
      </button>
    </>
  );
}

export default App;
