import React from "react";
import UserList from "../component/UserList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Paula Augusto",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      places: 3,
    },
    {
      id: "u2",
      name: "Sproviero Matias",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      places: 1,
    },
    {
      id: "u3",
      name: "Kay Sproviero",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      places: 2,
    },
  ];
  return <UserList items={USERS} />;
};

export default User;
