import React from "react";
import { Link, Route } from "react-router-dom";
import Airing2Mention from "./airingRoutes/Airing2Mention";

const Airing2 = () => {
    return (
        <>
            <p><Link to="/airing2/mention2">Mention2</Link></p>
            <Route path="/airing2/mention2" component={Airing2Mention} />
        </>
    )
}

export default Airing2