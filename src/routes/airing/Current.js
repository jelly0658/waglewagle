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
            <p><Link to="/airing1">airing1</Link></p>
            <Route path="/airing1" component={Airing1} />
            <p><Link to="/airing2">airing2</Link></p>
            <Route path="/airing2" component={Airing2} />
            <p><Link to="/airing3">airing3</Link></p>
            <Route path="/airing3" component={Airing3} />
            <p><Link to="/airing4">airing4</Link></p>
            <Route path="/airing4" component={Airing4} />
            <p><Link to="/airing5">airing5</Link></p>
            <Route path="/airing5" component={Airing5} />
            <p><Link to="/airing6">airing6</Link></p>
            <Route path="/airing6" component={Airing6} />
            <p><Link to="/airing7">airing7</Link></p>
            <Route path="/airing7" component={Airing7} />
            <p><Link to="/airing8">airing8</Link></p>
            <Route path="/airing8" component={Airing8} />
            <p><Link to="/airing9">airing9</Link></p>
            <Route path="/airing9" component={Airing9} />
            <p><Link to="/airing10">airing10</Link></p>
            <Route path="/airing10" component={Airing10} />
        </>
    )
}

export default Current