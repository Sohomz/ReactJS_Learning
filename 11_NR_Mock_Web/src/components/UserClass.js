import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>Name: {this.props.name}</h1>
        <h3>Location: Hooghly</h3>
        <h3>Contact: sogomd077@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
