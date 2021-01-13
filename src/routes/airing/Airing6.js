import React from "react";
import { Link, Route } from "react-router-dom";
import Airing6Mention from "./airingRoutes/Airing6Mention";

const Airing6 = () => {
    return (
        <>
            <p><Link to="/airing6/mention6">Mention6</Link></p>
            <Route path="/airing6/mention6" component={Airing6Mention} />
        </>
    )
}

export default Airing6