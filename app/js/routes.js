import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import Home from "./components/Home";
import SetList from "./pages/SetList";

export default (
    <Route path="/" component={AppRoot}>
        <IndexRoute component={Home}/>
        <Route path="setList">
            <IndexRoute component={SetList}/>
        </Route>
        <Route path="combi">
            <IndexRoute component={SetListDisplay}/>
        </Route>
    </Route>
);
