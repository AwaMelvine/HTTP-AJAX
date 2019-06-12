import React, { Component } from "react";

export default class FriendForm extends Component {
  render() {
    const { friend, handleChangeFriend, handleSubmitFriend } = this.props;
    const { name, email, age } = friend;
    return (
      <form onSubmit={event => handleSubmitFriend(event)}>
        <h3>Add Friend</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => handleChangeFriend(event)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => handleChangeFriend(event)}
          placeholder="Email"
        />
        <input
          type="number"
          name="age"
          value={age}
          onChange={event => handleChangeFriend(event)}
          placeholder="Age"
        />
        <button type="submit">Add Friend</button>
      </form>
    );
  }
}
