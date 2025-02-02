import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  render() {
    console.log("Child render");
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <h1>Name: {this.props.name}</h1>
        <h3>Location: Hooghly</h3>
        <h3>Contact: sohomd077@gmail.com</h3>
        <input
          type="button"
          value="btn"
          onClick={() => {
            this.setState({
              count: (this.state.count += 1),
              count1: (this.state.count += 1),
            });
          }}
        ></input>
      </div>
    );
  }
}
export default UserClass;
