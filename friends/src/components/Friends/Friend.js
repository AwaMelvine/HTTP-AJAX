import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FriendStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem;

  span {
    flex: 1;
  }

  span.sn {
    flex: 0.4;
  }

  span.action-btns {
    flex: 0.4;
    display: flex;
    justify-content: space-between;

    span {
      flex: 1;
    }
  }
`;

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const EditButton = styled(Link)`
  color: green;
  cursor: pointer;
`;

export default function Friend({ friend, sn, deleteFriend, findFriend }) {
  return (
    <FriendStyled>
      <span className="sn">{sn}</span>
      <span>{friend.name}</span>
      <span>{friend.age}</span>
      <span className="action-btns">
        <EditButton
          to={`/update-friend/${friend.id}`}
          onClick={() => findFriend(friend.id)}
        >
          Edit
        </EditButton>
        <DeleteButton onClick={() => deleteFriend(friend.id)}>x</DeleteButton>
      </span>
    </FriendStyled>
  );
}
