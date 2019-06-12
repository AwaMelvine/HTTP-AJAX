import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.email} friend={friend} />
      ))}
    </div>
  );
}
