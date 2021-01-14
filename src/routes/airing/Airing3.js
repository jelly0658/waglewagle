import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing3Mention from "./airingRoutes/Airing3Mention";

const Airing3 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="http://program.tving.com/tvn/truebeauty" target="_blank" rel="noreferrer">
                        <img src="/airing/airing3 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing3/mention3">
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
                    <p className="text">외모 콤플렉스를 가지고 있다가 '화장'을 통해 여신이 된 주경과
                    남모를 상처를 간직한 수호가 만나 서로의 비밀을 공유하며 성장하는 자존감 회복 로맨틱 코미디
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/임주경.png" className="onePeople1" alt="인물1" />
                    <img src="/airing/한서준.png" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing3/mention3" component={Airing3Mention} />
            </div>
        </>
    )
}

export default Airing3