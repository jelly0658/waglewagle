import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing10Mention from "./airingRoutes/Airing10Mention";

const Airing10 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="https://www.netflix.com/kr/title/80209129" target="_blank" rel="noreferrer">
                        <img src="/airing/airing10 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing10/mention10">
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
                    <p className="text">평범한 이름과 달리 남들 눈에 보이지 않는 '젤리'를 볼 수 있는
                    특별한 능력을 가진 보건교사 안은영이 새로 부임한 고등학교에서 심상치 않은
                    미스터리를 발견하고, 한문교사 홍인표와 함께 이를 해결해가는 명랑 판타지 시리즈
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/안은영.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/홍인표.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing10/mention10" component={Airing10Mention} />
            </div>
        </>
    )
}

export default Airing10