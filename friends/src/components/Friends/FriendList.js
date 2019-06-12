import React from "react";

export default function FriendList({ friends }) {
  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.email} friend={friend} />
      ))}
    </div>
  );
}
