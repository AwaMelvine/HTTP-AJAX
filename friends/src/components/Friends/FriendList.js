import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, deleteFriend }) {
  return (
    <div>
      {friends.map((friend, index) => (
        <Friend
          key={friend.email}
          deleteFriend={deleteFriend}
          friend={friend}
          sn={index + 1}
        />
      ))}
    </div>
  );
}
