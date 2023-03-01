import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { profileAdd } from "./../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileApi } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userID;
    profileApi.getProfile(userId).then((response) => {
      this.props.profileAdd(response.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (props) => ({
  profile: props.profilePage.profile,
});
const mapDispatchToProps = (dispatch) => ({
  profileAdd: (map) => {
    dispatch(profileAdd(map));
  },
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
