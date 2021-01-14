import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing8Mention from "./airingRoutes/Airing8Mention";

const Airing8 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="https://www.netflix.com/kr/title/80990668" target="_blank" rel="noreferrer">
                        <img src="/airing/airing8 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing8/mention8">
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
                    <p className="text">돈을 벌기 위해 죄책감없이 범죄의 길을 선택한
                    고등학생들이 그로 인해 돌이킬 수 없이 혹독한 대가를 치르는 과정을
                    그린 넷플릭스 오리지널 시리즈
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/배규리.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/오지수.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing8/mention8" component={Airing8Mention} />
            </div>
        </>
    )
}

export default Airing8