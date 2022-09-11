import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/component/UIElements/Avatar";
import Card from "../../shared/component/UIElements/Card";
import "./UserItem.css";

const UserItem = ({ propertys }) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${propertys.id}/places`}>
          <div className="user-item__image">
            <Avatar ppt={propertys} />
          </div>
          <div className="user-item__info">
            <h2>{propertys.name}</h2>
            <h3>
              {propertys.places} {propertys.places === 1 ? "Place." : "Places."}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
