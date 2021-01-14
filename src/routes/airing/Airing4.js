import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing4Mention from "./airingRoutes/Airing4Mention";

const Airing4 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="https://tv.jtbc.joins.com/runon" target="_blank" rel="noreferrer">
                        <img src="/airing/airing4 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing4/mention4">
                    <div className="mentionBtns">
                        <button className="mentionBtn" name="mention">
                            실시간 달글가기 <FontAwesomeIcon icon={faComments} color={"red"} />
                        </button>
                    </div>
                </Link>
                <div className="titleContainer">
                    <h1 className="title">줄거리</h1>
                </div>
                <span className="textContainer">
                    <p className="text">같은 한국말을 쓰면서도 소통이 어려운 시대,
                    서로 다른 세계에 살던 사람들이 각자의 언어로 소통하고 관계를 맺으며,
                    사랑을 향해 '런 온'하는 로맨스 드라마
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/오미주.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/기선겸.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing4/mention4" component={Airing4Mention} />
            </div>
        </>
    )
}

export default Airing4