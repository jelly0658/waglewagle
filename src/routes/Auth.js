import React from "react";
import AuthForm from "components/AuthForm";

const Auth = () => {
    return (
        <div className="authContainer">
            <img
                src={"/logo.png"}
                className="Logo"
                alt="Logo"
                style={{ width: "200px", height: "auto", marginTop: "25px" }}
            />
            <span className="authText">
                <h1 className="authInfo">
                    이메일과 비밀번호를 입력 후
                </h1>
                <h2 className="authInfo">
                    <red>가입하기</red> 버튼만 눌러도 <strong>바로 가입!</strong>
                </h2>
            </span>
            <AuthForm />
            <span className="authText">
                <h1 className="authInfo">
                    개인 정보보호를 위해
                </h1>
                <h2 className="authInfo">
                    <red>"와글와글"</red>은 <strong>어떠한 개인정보도 수집하지 않습니다.</strong>
                </h2>
            </span>
            <span>
                <img src="/main.png" alt="home" style={{ width: 360 }} />
            </span>
        </div>
    );
};
export default Auth;