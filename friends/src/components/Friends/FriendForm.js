import React, { Component } from "react";

export default class FriendForm extends Component {
  render() {
    const {
      friend,
      editing,
      handleChangeFriend,
      handleSubmitFriend,
      updateFriend
    } = this.props;
    const { name, email, age } = friend;

    const formTitle = editing ? "Edit Friend" : "Add Friend";
    const submitBtn = editing ? (
      <button type="submit">Update Friend</button>
    ) : (
      <button type="submit">Add Friend</button>
    );

    return (
      <form
        onSubmit={event =>
          editing ? updateFriend(event) : handleSubmitFriend(event)
        }
      >
        <h3>{formTitle}</h3>
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
        {submitBtn}
      </form>
    );
  }
}
