import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import FriendList from "./components/Friends/FriendList";
import FriendForm from "./components/Friends/FriendForm";

const friendsApi = "http://localhost:5000/friends";

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
      editing: false
    };
  }
  async componentDidMount() {
    const friendsData = await axios.get(friendsApi);
    this.setState({ ...this.state, friends: friendsData.data });
  }
  deleteFriend = async id => {
    const { data } = await axios.delete(`${friendsApi}/${id}`);
    this.setState({ ...this.state, friends: data });
  };

  handleSubmitFriend = async friend => {
    try {
      const { data } = await axios.post(friendsApi, friend);
      this.setState({ ...this.state, friends: data });
    } catch (error) {
      console.log(error);
    }
  };
  findFriend = id => {
    const friend = this.state.friends.find(friend => friend.id === id);
    this.setState({ ...this.state, friend, editing: true });
  };
  updateFriend = async friend => {
    try {
      const { data } = await axios.put(`${friendsApi}/${friend.id}`, friend);
      this.setState({
        ...this.state,
        friends: data,
        editing: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { friends, friend, editing } = this.state;
    return (
      <StyledApp>
        <FriendForm
          {...friend}
          editing={editing}
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
