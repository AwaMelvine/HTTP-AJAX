import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Friend, { FriendStyled } from "./Friend";

const FriendListStyled = styled.div`
  h3 {
    text-align: center;
  }
`;

export default function FriendList({ friends, deleteFriend, findFriend }) {
  return (
    <FriendListStyled>
      <Link to="/add-friend">Add Friend</Link>
      <h3>Friend List</h3>
      <FriendStyled>
        <span className="sn">SN</span>
        <span>Name</span>
        <span>Age</span>
        <span className="action-btns">Action</span>
      </FriendStyled>
      {friends.map((friend, index) => (
        <Friend
          key={friend.email}
          deleteFriend={deleteFriend}
          findFriend={findFriend}
          friend={friend}
          sn={index + 1}
        />
      ))}
    </FriendListStyled>
  );
}
