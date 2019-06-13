import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form` 
  width: 50%;
  margin: 0rem auto;
  padding: 1rem;

  h3 {
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    padding: 0.35rem 1.24rem;
    font-size: 1.1rem;
    margin-bottom: 0.35rem;
    height: 50px;
    line-height: 1.5rem;
    outline: none;
    border-radius: 0.25rem;
    border: 1px solid #dfdfdf;
  }

  button {
    display: block;
    width: 100%;
    border: 1px solid transparent;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 0.25rem;
  }
`;

const StyledAddButton = styled.button`
  background-color: #228b22;
`;

const StyledUpdateButton = styled.button`
  background-color: #3b5998;
`;

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
      <StyledUpdateButton type="submit">Update Friend</StyledUpdateButton>
    ) : (
      <StyledAddButton type="submit">Add Friend</StyledAddButton>
    );

    return (
      <StyledForm
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
      </StyledForm>
    );
  }
}
