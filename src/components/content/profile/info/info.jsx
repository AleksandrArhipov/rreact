import React from "react";
import s from "./info.module.css";
import Ava from "./ava/ava";
import InfoItem from "./infoitem/infoitem";

const Info = props => {
  let infoElement = props.infodata.map(i => (
    <InfoItem name={i.name} value={i.value} />
  ));

  return (
    <div className={s.main}>
      <Ava />
      <div className={s.info}>{infoElement}</div>
    </div>
  );
};

export default Info;
