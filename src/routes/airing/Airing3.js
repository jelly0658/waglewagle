import React from "react";
import { Link, Route } from "react-router-dom";
import Airing3Mention from "./airingRoutes/Airing3Mention";

const Airing3 = () => {
    return (
        <>
            <p><Link to="/airing3/mention3">Mention3</Link></p>
            <Route path="/airing3/mention3" component={Airing3Mention} />
        </>
    )
}

export default Airing3