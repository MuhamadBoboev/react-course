import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  profileAdd,
  profileAPI,
  getStatusAPI,
  updateStatusAPI,
} from "./../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userID;
    if (!userId) {
      userId = 28181;
    }
    this.props.profileAPI(userId);
    this.props.getStatusAPI(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusAPI={this.props.updateStatusAPI}
      />
    );
  }
}
const mapStateToProps = (props) => ({
  profile: props.profilePage.profile,
  status: props.profilePage.status,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
export default connect(mapStateToProps, {
  profileAdd,
  profileAPI,
  getStatusAPI,
  updateStatusAPI,
})(withRouter(ProfileContainer));
