import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
    <nav>
        <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
            <li>
                <Link to="/" style={{ marginRight: 10 }}>
                    <FontAwesomeIcon icon={faPlay} color={"red"} size="2x" />
                </Link>
            </li>
            <li>
                <Link to="/Propose" style={{ marginLeft: 10, marginRight: 10 }}>
                    <FontAwesomeIcon icon={faPause} color={"tomato"} size="2x" />
                </Link>
            </li>
            <li>
                <Link
                    to="/profile"
                    style={{
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12,
                    }}
                >
                    <FontAwesomeIcon icon={faUser} color={"#ff577f"} size="2x" />
                    <span style={{ marginTop: 10 }}>
                        {userObj.displayName
                            ? `${userObj.displayName}의 프로필`
                            : "Profile"}
                    </span>
                </Link>
            </li>
        </ul>
    </nav>
);
export default Navigation;