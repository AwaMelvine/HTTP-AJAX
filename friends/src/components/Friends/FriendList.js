import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, deleteFriend, findFriend }) {
  return (
    <div>
      {friends.map((friend, index) => (
        <Friend
          key={friend.email}
          deleteFriend={deleteFriend}
          findFriend={findFriend}
          friend={friend}
          sn={index + 1}
        />
      ))}
    </div>
  );
}
