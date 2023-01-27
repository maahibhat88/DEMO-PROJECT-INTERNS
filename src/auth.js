import React from "react";
import { Redirect } from "react-router-dom";


const Auth = (WrappedComponent) => {


    const checkLogin = () => {
        if(!localStorage.getItem("user")){
            return false;
        }
        else{
            return true;
        }
    };

    return checkLogin() ? <WrappedComponent /> : <Redirect to="/login" />


}

export default Auth;