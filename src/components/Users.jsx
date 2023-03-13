import React, { Component } from "react";

export const User = props => {
  const { users, userId } = props;
  return (
    <div>
      <p>Name: {users[userId].name}</p>
      <p>Email:{users[userId].email}</p>
      <p>Phone:{users[userId].phone}</p>
      <p>City: {users[userId].address.city}</p>
      <button onClick={props.goBack}>back</button>
    </div>
  );
};