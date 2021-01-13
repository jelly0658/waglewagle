import React from "react";
import { Link, Route } from "react-router-dom";
import Airing9Mention from "./airingRoutes/Airing9Mention";

const Airing9 = () => {
    return (
        <>
            <p><Link to="/airing9/mention9">Mention9</Link></p>
            <Route path="/airing9/mention9" component={Airing9Mention} />
        </>
    )
}

export default Airing9