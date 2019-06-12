import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <div>
      {friends.map((friend, index) => (
        <Friend key={friend.email} sn={index + 1} friend={friend} />
      ))}
    </div>
  );
}
