import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import FriendList from "./components/Friends/FriendList";
import FriendForm from "./components/Friends/FriendForm";

const StyledApp = styled.div`
  width: 50%;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: white;
  border-radius: 0.25rem;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      friend: {
        name: "",
        email: "",
        age: ""
      },
      editing: false
    };
  }
  async componentDidMount() {
    const friendsData = await axios.get("http://localhost:5000/friends");
    this.setState({ ...this.state, friends: friendsData.data });
  }
  deleteFriend = async id => {
    const { data } = await axios.delete(`http://localhost:5000/friends/${id}`);
    this.setState({ ...this.state, friends: data });
  };
  handleChangeFriend = event => {
    this.setState({
      ...this.state,
      friend: { ...this.state.friend, [event.target.name]: event.target.value }
    });
  };
  handleSubmitFriend = async event => {
    event.preventDefault();
    const { friend } = this.state;
    const { data } = await axios.post(`http://localhost:5000/friends`, friend);
    this.setState({
      ...this.state,
      friends: data,
      friend: { name: "", email: "", age: "" }
    });
  };
  findFriend = id => {
    const friend = this.state.friends.find(friend => friend.id === id);
    this.setState({ ...this.state, friend, editing: true });
  };
  updateFriend = async event => {
    event.preventDefault();
    const { friend } = this.state;
    event.preventDefault();
    const { data } = await axios.put(
      `http://localhost:5000/friends/${friend.id}`,
      friend
    );
    this.setState({
      ...this.state,
      friends: data,
      friend: { name: "", email: "", age: "" },
      editing: false
    });
  };

  render() {
    const { friends, friend, editing } = this.state;
    return (
      <StyledApp>
        <FriendForm
          friend={friend}
          editing={editing}
          handleChangeFriend={this.handleChangeFriend}
          handleSubmitFriend={this.handleSubmitFriend}
          updateFriend={this.updateFriend}
        />
        <FriendList
          friends={friends}
          deleteFriend={this.deleteFriend}
          findFriend={this.findFriend}
        />
      </StyledApp>
    );
  }
}

export default App;
