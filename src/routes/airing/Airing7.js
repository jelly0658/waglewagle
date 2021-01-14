import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing7Mention from "./airingRoutes/Airing7Mention";

const Airing7 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="https://www.netflix.com/kr/title/80180171" target="_blank" rel="noreferrer">
                        <img src="/airing/airing7 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing7/mention7">
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
                    <p className="text">죽은 자들이 살아나 생지옥이 된 위기의 조선,
                    왕권을 탐하는 조씨 일가의 탐욕과 누구도 믿을 수 없게 되어버린
                    왕세자 창의 피의 사투를 그린 미스터리 스릴러
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/서비.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/이창.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing7/mention7" component={Airing7Mention} />
            </div>
        </>
    )
}

export default Airing7