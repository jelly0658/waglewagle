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
            <div className="container">
                <ul style={{ display: "flex", justifyContent: "center" }}>
                    <li>
                        <Link to="/airing1">
                            <img src="/airing/airing1 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing1" component={Airing1} />
                    </li>
                    <li>
                        <Link to="/airing2">
                            <img src="/airing/airing2 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing2" component={Airing2} />
                    </li>
                </ul>
                <ul style={{ display: "flex", justifyContent: "center" }}>
                    <li>
                        <Link to="/airing3">
                            <img src="/airing/airing3 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing3" component={Airing3} />
                        <Link to="/airing4">
                            <img src="/airing/airing4 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing4" component={Airing4} />
                    </li>
                </ul>
                <ul style={{ display: "flex", justifyContent: "center" }}>
                    <li>
                        <Link to="/airing5">
                            <img src="/airing/airing5 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing5" component={Airing5} />
                        <Link to="/airing6">
                            <img src="/airing/airing6 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing6" component={Airing6} />
                    </li>
                </ul>
                <ul style={{ display: "flex", justifyContent: "center" }}>
                    <li>
                        <Link to="/airing7">
                            <img src="/airing/airing7 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing7" component={Airing7} />
                        <Link to="/airing8">
                            <img src="/airing/airing8 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing8" component={Airing8} />
                    </li>
                </ul>
                <ul style={{ display: "flex", justifyContent: "center" }}>
                    <li>
                        <Link to="/airing9">
                            <img src="/airing/airing9 poster.png" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing9" component={Airing9} />
                        <Link to="/airing10">
                            <img src="/airing/airing10 poster.jpg" className="mainPoster" alt="poster" />
                        </Link>
                        <Route path="/airing10" component={Airing10} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Current