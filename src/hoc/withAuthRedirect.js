import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export const withAuthRedirect = (Component) => {
  class RedirectConponent extends React.Component {
    render() {
      let sad = () => {
        if (!this.props.isAuth) {
          return <Navigate to="/login" />;
        } else {
          return <Component {...this.props} />;
        }
      };

      return sad();
    }
  }

  let ConnectedAuthRedirectComponenta = connect(mapStateToPropsForRedirect)(
    RedirectConponent
  );
  return ConnectedAuthRedirectComponenta;
};
