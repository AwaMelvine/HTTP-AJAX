import React from "react";

export default function Friend({ friend, sn }) {
  return (
    <div>
      <span>{sn}</span>
      <span>{friend.name}</span>
      <span>{friend.email}</span>
      <span>{friend.age}</span>
      <span className="action-btns">
        <span>Edit</span>
        <span>x</span>
      </span>
    </div>
  );
}
