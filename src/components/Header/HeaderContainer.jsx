import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authApi } from "../../api/api";
import { setUserAuth } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authApi.getAuthApi().then((response) => {
      let { id, login, email } = response.data.data;

      if (response.data.resultCode == 0) {
        this.props.setUserAuth(id, login, email);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (props) => ({
  authData: props.auth,
});
export default connect(mapStateToProps, { setUserAuth })(HeaderContainer);
