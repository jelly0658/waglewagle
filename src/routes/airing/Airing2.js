import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing2Mention from "./airingRoutes/Airing2Mention";

const Airing2 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="http://program.tving.com/ocn/thecounter" target="_blank" rel="noreferrer">
                        <img src="/airing/airing2 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing2/mention2">
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
                    <p className="text">악귀 사냥꾼 '카운터'들이 국숫집 직원으로 위장해
                    지상의 악귀들을 물리치는 통쾌하고 땀내 나는 악귀타파 히어로물
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/도하나.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/소문.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing2/mention2" component={Airing2Mention} />
            </div>
        </>
    )
}

export default Airing2