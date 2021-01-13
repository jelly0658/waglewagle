import React from "react";
import { Link, Route } from "react-router-dom";
import Airing7Mention from "./airingRoutes/Airing7Mention";

const Airing7 = () => {
    return (
        <>
            <p><Link to="/airing7/mention7">Mention7</Link></p>
            <Route path="/airing7/mention7" component={Airing7Mention} />
        </>
    )
}

export default Airing7