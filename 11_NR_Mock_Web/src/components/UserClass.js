import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
      data: "Dummy Name",
    };
  }

  async componentDidMount() {
    const gitApiData = await fetch("https://api.github.com/users/sohomz");
    const convertedData = await gitApiData.json();
    this.setState({
      data: convertedData,
    });
  }

  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <h1>Name: {this.state.data.name + " from gitApi"}</h1>
        <h3>Location: {this.state.data.html_url}</h3>
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
