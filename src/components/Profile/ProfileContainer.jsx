import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { profileAdd, profileAPI } from "./../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileApi } from "../../api/api";
import { Navigate } from "react-router-dom";
// import { RedirectFunction } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userID;
    this.props.profileAPI(userId);
    // profileApi.getProfile(userId).then((response) => {
    //   this.props.profileAdd(response.data);
    // });
  }
  render() {
    if (this.props.auth.isAuth === true) return console.log("sda");
    // debugger;
    // console.log(this.props.auth.isAuth);

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (props) => ({
  profile: props.profilePage.profile,
  auth: props.auth,
});
// const mapDispatchToProps = (dispatch) => ({
//   profileAdd,
//   profileAPI,
// });

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
export default connect(mapStateToProps, { profileAdd, profileAPI })(
  withRouter(ProfileContainer)
);
