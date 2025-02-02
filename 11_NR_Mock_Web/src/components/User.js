import { useState } from "react";

const User = ({ name }) => {
  let [count, setCount] = useState(0);
  const [const1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <h3>Location: Hooghly</h3>
      <h3>Contact: sohomd077@gmail.com</h3>
      <input
        type="button"
        value="Increase count"
        className="border-black"
        onClick={() => {
          count += 1;
          setCount(count);
        }}
      />
    </div>
  );
};

export default User;
