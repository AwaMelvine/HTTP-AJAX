import React, { Component } from "react";
import axios from "axios";
import FriendList from "./components/Friends/FriendList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }
  async componentDidMount() {
    const friendsData = await axios.get("http://localhost:5000/friends");
    this.setState({ friends: friendsData.data });
  }
  render() {
    const { friends } = this.state;
    return (
      <div className="App">
        <FriendList friends={friends} />
      </div>
    );
  }
}

export default App;
