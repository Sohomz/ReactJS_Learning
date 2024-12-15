import React from "react";
import ReactDOM from "react-dom/client";

// //what to render?
// const heading=React.createElement("div",{id:"parent",xyz:"abc"},
//     [
//         React.createElement("div",{id:"idForChildDiv1"},
//             [React.createElement("h1",{id:"idForNestedH1"},"From Nested H1 using React Create Element"),
//             React.createElement("h2",{id:"idForNestedH1"},"From Nested H2 using React Create Element")]
//             ), //here we start child2 because this is an array
//         React.createElement("div",{id:"idForChildDiv2"},
//             [React.createElement("h3",{id:"idForNestedH3"},"From Nested H3 using React Create Element"),
//             React.createElement("h4",{id:"idForNestedH4"},"From Nested H4 using React Create Element")]
//             )
//     ]
// );

// //Where to render
// const r=ReactDOM.createRoot(document.getElementById("root"));

// //Now render inside div that is to say root id
// r.render(heading);

// //React Functional component 1
// const HeaderComponent1 = function () {
//   return <h1>This is a functional component 1</h1>;
// };

//React element 1
const Jsxheader = (
  <h1>
    {" "}
    this is HTML like syntax 🚀
    <a>This is inside something put a bracket</a>
  </h1>
);

//React element 2
const Jsxheader2 = <div>{Jsxheader}</div>;

const num = 1000;

//React Functional component 2
const HeaderComponent2 = () => (
  <div>
    {num}
    {Jsxheader}
    <h3>{1000 + 200}</h3>
    <h2>This is a functional component 2</h2>
  </div>
);

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<HeaderComponent2 />);
