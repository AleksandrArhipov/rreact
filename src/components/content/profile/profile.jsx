import React from "react";
import s from "./profile.module.css";
import { Redirect } from "react-router-dom";
import MyPostContainer from "./mypost/mypostContainer";
import InfoContainer from "./info/infoContainer";

const Profile = props => {
  let login = window.localStorage.getItem("login");
  let pass = window.localStorage.getItem("pass");

  if (login == "Admin" && pass == "12345") {
    return (
      <div className={s.wrap}>
        <InfoContainer />
        <MyPostContainer/>
      </div>
    );
  } else return <Redirect to="login" />;
};

export default Profile;
