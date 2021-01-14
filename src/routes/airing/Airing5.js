import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing5Mention from "./airingRoutes/Airing5Mention";

const Airing5 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="http://program.kbs.co.kr/2tv/drama/secretman2020/pc/index.html" target="_blank" rel="noreferrer">
                        <img src="/airing/airing5 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing5/mention5">
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
                    <p className="text">사고로 일곱 살의 지능을 갖게 된 한 남자가
                    죽음의 문턱에서 기적을 마주하며 복수를 위해 질주하는 과정을 그린 드라마
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/엄현경.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/강은탁.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing5/mention5" component={Airing5Mention} />
            </div>
        </>
    )
}

export default Airing5