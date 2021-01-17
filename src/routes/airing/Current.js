import React from "react";
import { Link, Route } from "react-router-dom";
import Airing1 from "../airing/Airing1"
import Airing10 from "./Airing10";
import Airing2 from "./Airing2";
import Airing3 from "./Airing3";
import Airing4 from "./Airing4";
import Airing5 from "./Airing5";
import Airing6 from "./Airing6";
import Airing7 from "./Airing7";
import Airing8 from "./Airing8";
import Airing9 from "./Airing9";

const Current = () => {
    return (
        <>
            <div className="currentContainer">
                <header className="screen-header">
                    <h3 className="screen-header__title">실시간 달글</h3>
                </header>
                <main className="main-screen">
                    <Link to="/airing1" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing1 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing1" component={Airing1} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">철인왕후</h1>
                                <h2 className="user-component__subtitle">
                                    토, 일 PM 09:00 tvN
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing2" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing2 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing2" component={Airing2} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">경이로운 소문</h1>
                                <h2 className="user-component__subtitle">
                                    토, 일 PM 10:30 OCN
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing3" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing3 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing3" component={Airing3} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">여신강림</h1>
                                <h2 className="user-component__subtitle">
                                    수, 목 PM 10:30 tvN
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing4" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing4 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing4" component={Airing4} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">런 온</h1>
                                <h2 className="user-component__subtitle">
                                    수, 목 PM 09:00 JTBC
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing5" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing5 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing5" component={Airing5} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">비밀의 남자</h1>
                                <h2 className="user-component__subtitle">
                                    월 ~ 금 PM 07:50 KBS2
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing6" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing6 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing6" component={Airing6} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">스위트 홈</h1>
                                <h2 className="user-component__subtitle">
                                    2020.12.18 시즌시작 NETFLIX
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing7" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing7 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing7" component={Airing7} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">킹덤</h1>
                                <h2 className="user-component__subtitle">
                                    2020.03.13 시즌시작(6부작) NETFLIX
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing8" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing8 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing8" component={Airing8} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">인간수업</h1>
                                <h2 className="user-component__subtitle">
                                    2020.04.29 시즌시작(10부작) NETFLIX
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing9" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing9 poster.png" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing9" component={Airing9} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">좋아하면 울리는</h1>
                                <h2 className="user-component__subtitle">
                                    2019.08.22 시즌시작(8부작) NETFLIX
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                    <Link to="/airing10" className="user-component">
                        <div className="user-component__column">
                            <img src="/airing/airing10 poster.jpg" className="user-component__avatar user-component__avatar" alt="poster" />
                            <Route path="/airing10" component={Airing10} />
                            <div className="user-component__text">
                                <h1 className="user-component__title">보건교사 안은영</h1>
                                <h2 className="user-component__subtitle">
                                    2020.09.25 시즌시작(6부작) NETFLIX
                            </h2>
                            </div>
                        </div>
                        <div className="user-component__column">
                            <span className="user-component__time">
                            </span>
                        </div>
                    </Link>
                </main>
            </div>
        </>
    )
}

export default Current