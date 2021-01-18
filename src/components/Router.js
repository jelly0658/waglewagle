import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";
import Current from "routes/airing/Current";
import Propose from "routes/Propose";
import Airing1 from "routes/airing/Airing1";
import Airing2 from "routes/airing/Airing2";
import Airing3 from "routes/airing/Airing3";
import Airing4 from "routes/airing/Airing4";
import Airing5 from "routes/airing/Airing5";
import Airing6 from "routes/airing/Airing6";
import Airing7 from "routes/airing/Airing7";
import Airing8 from "routes/airing/Airing8";
import Airing10 from "routes/airing/Airing10";
import Airing9 from "routes/airing/Airing9";
import Airing1Mention from "routes/airing/airingRoutes/Airing1Mention";
import Airing2Mention from "routes/airing/airingRoutes/Airing2Mention";
import Airing3Mention from "routes/airing/airingRoutes/Airing3Mention";
import Airing4Mention from "routes/airing/airingRoutes/Airing4Mention";
import Airing5Mention from "routes/airing/airingRoutes/Airing5Mention";
import Airing6Mention from "routes/airing/airingRoutes/Airing6Mention";
import Airing7Mention from "routes/airing/airingRoutes/Airing7Mention";
import Airing8Mention from "routes/airing/airingRoutes/Airing8Mention";
import Airing9Mention from "routes/airing/airingRoutes/Airing9Mention";
import Airing10Mention from "routes/airing/airingRoutes/Airing10Mention";
import Home from "routes/Home";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                    <div
                        style={{
                            maxWidth: 890,
                            width: "100%",
                            margin: "0 auto",
                            marginTop: 80,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >   <Route exact path="/home">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/">
                            <Current userObj={userObj} />
                        </Route>
                        <Route exact path="/airing1">
                            <Airing1 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing1/mention1">
                            <Airing1Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing2">
                            <Airing2 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing2/mention2">
                            <Airing2Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing3">
                            <Airing3 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing3/mention3">
                            <Airing3Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing4">
                            <Airing4 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing4/mention4">
                            <Airing4Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing5">
                            <Airing5 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing5/mention5">
                            <Airing5Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing6">
                            <Airing6 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing6/mention6">
                            <Airing6Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing7">
                            <Airing7 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing7/mention7">
                            <Airing7Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing8">
                            <Airing8 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing8/mention8">
                            <Airing8Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing9">
                            <Airing9 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing9/mention9">
                            <Airing9Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/airing10">
                            <Airing10 userObj={userObj} />
                        </Route>
                        <Route exact path="/airing10/mention10">
                            <Airing10Mention userObj={userObj} />
                        </Route>
                        <Route exact path="/Propose">
                            <Propose userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser} />
                        </Route>
                    </div>
                ) : (
                        <>
                            <Route exact path="/">
                                <Auth />
                            </Route>
                        </>
                    )}
            </Switch>
        </Router>
    );
};
export default AppRouter;