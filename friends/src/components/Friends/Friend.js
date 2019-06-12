import React from "react";
import styled from "styled-components";

const DeleteButton = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const EditButton = styled.span`
  color: green;
  cursor: pointer;
`;

export default function Friend({ friend, sn, deleteFriend, findFriend }) {
  return (
    <div>
      <span>{sn}</span>
      <span>{friend.name}</span>
      <span>{friend.email}</span>
      <span>{friend.age}</span>
      <span className="action-btns">
        <EditButton onClick={() => findFriend(friend.id)}>Edit</EditButton>
        <DeleteButton onClick={() => deleteFriend(friend.id)}>x</DeleteButton>
      </span>
    </div>
  );
}
