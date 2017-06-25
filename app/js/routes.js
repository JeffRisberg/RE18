import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import Home from "./pages/Home";
import SetListPlay from "./pages/SetListPlay";
import SetListEdit from "./pages/SetListEdit";
import Combi from "./pages/Combi";

export default (
    <Route path="/" component={AppRoot}>
        <IndexRoute component={Home}/>
        <Route path="setListPlay">
            <IndexRoute component={SetListPlay}/>
        </Route>
        <Route path="setListEdit">
            <IndexRoute component={SetListEdit}/>
        </Route>
        <Route path="combi">
            <IndexRoute component={Combi}/>
        </Route>
    </Route>
);
