import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faTv, faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__btn">
                <Link
                    to="/"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12
                    }}>
                    <FontAwesomeIcon icon={faTv} color={"red"} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        방송
                        </span>
                </Link>
            </li>
            <li class="nav__btn">
                <Link
                    to="/Propose"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12
                    }}>
                    <FontAwesomeIcon icon={faBullhorn} color={"tomato"} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        제안하기
                        </span>
                </Link>
            </li>
            <li class="nav__btn">
                <Link
                    to="/profile"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12
                    }}
                >
                    <FontAwesomeIcon icon={faUser} color={"#ff577f"} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        {userObj.displayName
                            ? `${userObj.displayName}의 프로필`
                            : "프로필"}
                    </span>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;