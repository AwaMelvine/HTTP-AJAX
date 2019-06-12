import React, { Component } from "react";
import axios from "axios";
import FriendList from "./components/Friends/FriendList";
import FriendForm from "./components/Friends/FriendForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      friend: {
        name: "",
        email: "",
        age: ""
      }
    };
  }
  async componentDidMount() {
    const friendsData = await axios.get("http://localhost:5000/friends");
    this.setState({ friends: friendsData.data });
  }
  deleteFriend = async id => {
    const { data } = await axios.delete(`http://localhost:5000/friends/${id}`);
    this.setState({ friends: data });
  };
  handleChangeFriend = event => {
    this.setState({
      ...this.state,
      friend: { ...this.state.friend, [event.target.name]: event.target.value }
    });
  };
  render() {
    const { friends, friend } = this.state;
    return (
      <div className="App">
        <FriendForm
          friend={friend}
          handleChangeFriend={this.handleChangeFriend}
        />
        <FriendList friends={friends} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
