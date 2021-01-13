import React from "react";
import { Link, Route } from "react-router-dom";
import Airing8Mention from "./airingRoutes/Airing8Mention";

const Airing8 = () => {
    return (
        <>
            <p><Link to="/airing8/mention8">Mention8</Link></p>
            <Route path="/airing8/mention8" component={Airing8Mention} />
        </>
    )
}

export default Airing8