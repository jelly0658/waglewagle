import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing6Mention from "./airingRoutes/Airing6Mention";

const Airing6 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="https://www.netflix.com/kr/title/81061734" target="_blank" rel="noreferrer">
                        <img src="/airing/airing6 poster.jpg" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing6/mention6">
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
                    <p className="text">은둔형 외톨이 고등학생 현수가 가족을 잃고
                    이사 간 아파트에서 겪는 기괴하고도 충격적인 이야기
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/차현수.png" className="onePeople1" alt="인물1" />
                    <img src="/airing/서이경.png" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing6/mention6" component={Airing6Mention} />
            </div>
        </>
    )
}

export default Airing6