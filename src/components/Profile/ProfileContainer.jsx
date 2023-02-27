import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { mapAdd } from "./../../redux/profile-reducer";
class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        console.log(response.data);
        this.props.mapAdd(response.data);
      });
  }
  render() {
    console.log(this.props);
    return <Profile {...this.props} p />;
  }
}
const mapStateToProps = (props) => ({
  profile: props.profilePage.profile,
});
const mapDispatchToProps = (dispatch) => ({
  mapAdd: (map) => {
    dispatch(mapAdd(map));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
