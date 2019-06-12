import React from "react";
import styled from "styled-components";

const DeleteButton = styled.span`
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export default function Friend({ friend, sn, deleteFriend }) {
  return (
    <div>
      <span>{sn}</span>
      <span>{friend.name}</span>
      <span>{friend.email}</span>
      <span>{friend.age}</span>
      <span className="action-btns">
        <span>Edit</span>
        <DeleteButton onClick={() => deleteFriend(friend.id)}>x</DeleteButton>
      </span>
    </div>
  );
}
