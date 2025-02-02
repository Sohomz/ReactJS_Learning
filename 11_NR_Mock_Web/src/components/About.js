import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// export default About = () => {
//   return (
//     <div>
//       <h1>This is About page</h1>
//       <User name={"Sohom Das (function)"} />
//       <UserClass name={"Sohom Das (class)"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  async componentDidMount() {
    console.log("Parent mounted");
  }

  render() {
    return (
      <div>
        <h1>This is About page</h1>
        <User name="SohomDas (function)" />
        <UserClass />
      </div>
    );
  }
}
export default About;
