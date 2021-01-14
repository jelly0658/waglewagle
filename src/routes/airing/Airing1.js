import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing1Mention from "./airingRoutes/Airing1Mention";

const Airing1 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="http://program.tving.com/tvn/tvnchulin" target="_blank" rel="noreferrer">
                        <img src="/airing/airing1 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing1/mention1">
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
                    <p className="text">불의의 사고로 대한민국 대표 허세남 영혼이 깃들어
                    '저 세상 텐션'을 갖게 된 중전 김소용과 두 얼굴의
                    임금 철종 사이에서 벌어지는 영혼가출 스캔들
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/김소용.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/철종.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing1/mention1" component={Airing1Mention} />
            </div>
        </>
    )
}

export default Airing1