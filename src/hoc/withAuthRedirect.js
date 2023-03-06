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
          // debugger;
          return <Navigate to="/login" />;
        } else {
          // debugger;
          return <Component {...this.props} />;
        }
      };
      // setTimeout(console.log("sad"), 1000);

      return sad();
      // {
      //   if (!this.props.isAuth) {
      //     debugger;
      //     return <Navigate to="/login" />;
      //   } else {
      //     // debugger;
      //     return <Component {...this.props} />;
      //   }
      // }
    }
  }

  let ConnectedAuthRedirectComponenta = connect(mapStateToPropsForRedirect)(
    RedirectConponent
  );
  return ConnectedAuthRedirectComponenta;
};
