import React from "react";
import AuthForm from "components/AuthForm";

const Auth = () => {
    return (
        <div className="authContainer">
            <img
                src={"/logo.png"}
                className="Logo"
                alt="Logo"
                style={{ width: "200px", height: "auto" }}
            />
            <AuthForm />
        </div>
    );
};
export default Auth;