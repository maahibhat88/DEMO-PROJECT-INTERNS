import React, { Component, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// import Auth from "./auth"; 

// HOC : Higher order Components
// component 1  -> passing component 2 in comp 1, then returning back 1+2 and returning enhanced component

// function abc(a,...b){
// console.log(a);  // output 12
// console.log(b); // output [13,14,15]  //coz this is a rest operatot which taken n number of arguments
// }
// abc(12,13,14,15)

const ProtectedRoute = ({isLoggedIn, component : Component, ...rest}) => {
    return (
        <Route render={ (props) => {
            return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
         }}
         />
    );
};

// const EnhancedProtectedRoute = Auth(ProtectedRoute);
// export default EnhancedProtectedRoute;
//instead of protected route you have to write <EnhancedProtectedRoute/> in index.js 

export default ProtectedRoute;