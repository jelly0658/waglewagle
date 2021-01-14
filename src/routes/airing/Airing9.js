import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route } from "react-router-dom";
import Airing9Mention from "./airingRoutes/Airing9Mention";

const Airing9 = () => {
    return (
        <>
            <div className="container">
                <span className="posterContainer">
                    <a href="https://www.netflix.com/kr/title/80168068" target="_blank" rel="noreferrer">
                        <img src="/airing/airing9 poster.png" className="onePoster" alt="poster" />
                    </a>
                </span>
                <Link to="/airing9/mention9">
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
                    <p className="text">좋아하는 사람이 반경 10m 안에 들어오면 알람이 울리는
                    '좋알람' 어플이 개발되고, 알람을 통해서만 마음을 표현할 수 있다고 여겨지는
                    세상에서 펼쳐지는 세 남녀의 투명도 100% 로맨스를 그린 이야기
                    </p>
                </span>
                <div className="titleContainer">
                    <h2 className="title">주요 인물</h2>
                </div>
                <span className="peopleContainer">
                    <img src="/airing/여배우.jpg" className="onePeople1" alt="인물1" />
                    <img src="/airing/남배우.jpg" className="onePeople2" alt="인물2" />
                </span>
                <Route path="/airing9/mention9" component={Airing9Mention} />
            </div>
        </>
    )
}

export default Airing9