import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/component/UIElements/Card";
import "./UserList.css";
const UserList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found!</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {items.map((user) => (
        <UserItem key={user.id} propertys={user} />
      ))}
    </ul>
  );
};

export default UserList;
