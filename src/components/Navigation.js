import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faHome, faTv, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Item = styled.li` 
    color: ${props => (props.current ? "#fbd157" : "#fbede1")};
    transition: color 0.3s ease-in-out;
`

const Navigation = ({ userObj, location: { pathname } }) => (
    <nav class="nav">
        <ul class="nav__list">
            <Item class="nav__btn" current={
                pathname === "/home"}>
                <Link
                    to="/home"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12
                    }}>
                    <FontAwesomeIcon icon={faHome} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        홈
                        </span>
                </Link>
            </Item>
            <Item class="nav__btn" current={
                pathname
                !== "/Propose" &&
                pathname
                !== "/profile" &&
                pathname
                !== "/home"}>
                <Link
                    to="/"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12
                    }}>
                    <FontAwesomeIcon icon={faTv} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        방송
                        </span>
                </Link>
            </Item>
            <Item class="nav__btn" current={pathname === "/Propose"}>
                <Link
                    to="/Propose"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12
                    }}>
                    <FontAwesomeIcon icon={faBullhorn} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        제안하기
                        </span>
                </Link>
            </Item>
            <Item class="nav__btn" current={pathname === "/profile"}>
                <Link
                    to="/profile"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12
                    }}
                >
                    <FontAwesomeIcon icon={faUser} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        {userObj.displayName
                            ? `${userObj.displayName}의 프로필`
                            : "프로필"}
                    </span>
                </Link>
            </Item>
        </ul>
    </nav>
);

export default withRouter(Navigation);