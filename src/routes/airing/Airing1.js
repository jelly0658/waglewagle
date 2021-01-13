import React from "react";
import { Link, Route } from "react-router-dom";
import Airing1Mention from "./airingRoutes/Airing1Mention";

const Airing1 = () => {
    return (
        <>
            <p><Link to="/airing1/mention1">Mention1</Link></p>
            <Route path="/airing1/mention1" component={Airing1Mention} />
        </>
    )
}

export default Airing1