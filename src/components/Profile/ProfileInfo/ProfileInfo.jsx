import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
  state = {
    editMode: false,
    status: this.props.profile.aboutMe,
    // debugger
  };
  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }
  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    // console.log(this.state.editMode);
    // debugger;
    return (
      <div className={s.profile}>
        <div className={s["profile__bl-photo"]}>
          <img
            src={this.props.profile.photos.large}
            width="50"
            height="50"
            className={s.profile__photo}
          ></img>
        </div>
        <div className={s.profile__data}>
          <div className={s.profile__name}>{this.props.profile.fullName}</div>
          <div className="sad">
            {!this.state.editMode && (
              <div className="sad_1">
                <span
                  onDoubleClick={this.activateEditMode.bind(this)}
                  className="sad_2"
                >
                  {this.state.status}
                </span>
              </div>
            )}
            {this.state.editMode && (
              <div className="sad_1">
                <input
                  autoFocus
                  onBlur={this.deactivateEditMode.bind(this)}
                  value={this.state.status}
                  className="sad_2"
                ></input>
              </div>
            )}
          </div>
          <ul className={s["profile__bl-info"]}>
            <li className={s.profile__li}>
              Статус:
              <span className={s.profile__info}>
                {this.props.profile.aboutMe}
              </span>
            </li>
            <li className={s.profile__li}>
              Ищу ли я работу?:
              <span className={s.profile__info}>
                {this.props.profile.lookingForAJob ? "Yes" : "no"}
              </span>
            </li>
            <li className={s.profile__li}>
              Чем занимаюсь:
              <span className={s.profile__info}>
                {this.props.profile.lookingForAJobDescription}
              </span>
            </li>
            <li className={s.profile__li}>
              ВК:
              <a href="#" className={s.profile__info}>
                {this.props.profile.contacts.vk}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
