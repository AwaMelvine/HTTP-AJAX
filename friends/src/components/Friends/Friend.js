import React from "react";

export default function Friend({ friend }) {
  return (
    <div>
      <span>{friend.name}</span>
      <span>{friend.email}</span>
      <span>{friend.age}</span>
    </div>
  );
}
