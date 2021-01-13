import React from "react";
import { Link, Route } from "react-router-dom";
import Airing4Mention from "./airingRoutes/Airing4Mention";

const Airing4 = () => {
    return (
        <>
            <p><Link to="/airing4/mention4">Mention4</Link></p>
            <Route path="/airing4/mention4" component={Airing4Mention} />
        </>
    )
}

export default Airing4