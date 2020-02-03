import React from "react";
import s from "./../info.module.css";

const InfoItem = props => {
    return (
      <div>
        <span>
          {props.name}: {props.value}
        </span>
      </div>
    );
  };

  export default InfoItem;