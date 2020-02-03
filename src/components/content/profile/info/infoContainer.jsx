import Info from "./info";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return { infodata: state.profilePage.infodata };
};

const InfoContainer = connect(mapStateToProps)(Info);

export default InfoContainer;
