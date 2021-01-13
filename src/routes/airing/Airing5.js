import React from "react";
import { Link, Route } from "react-router-dom";
import Airing5Mention from "./airingRoutes/Airing5Mention";

const Airing5 = () => {
    return (
        <>
            <p><Link to="/airing5/mention5">Mention5</Link></p>
            <Route path="/airing5/mention5" component={Airing5Mention} />
        </>
    )
}

export default Airing5