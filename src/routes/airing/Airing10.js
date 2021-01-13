import React from "react";
import { Link, Route } from "react-router-dom";
import Airing10Mention from "./airingRoutes/Airing10Mention";

const Airing10 = () => {
    return (
        <>
            <p><Link to="/airing10/mention10">Mention10</Link></p>
            <Route path="/airing10/mention10" component={Airing10Mention} />
        </>
    )
}

export default Airing10