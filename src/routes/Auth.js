import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "../firebase";
import AuthForm from "components/AuthForm";

const Auth = () => {
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };
    return (
        <div className="authContainer">
            <img
                src={"/logo.png"}
                className="Logo"
                alt="Logo"
                style={{ width: "200px", height: "auto" }}
            />
            <AuthForm />
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                    구글로 로그인하기 <FontAwesomeIcon icon={faGoogle} color={"red"} />
                </button>
            </div>
        </div>
    );
};
export default Auth;