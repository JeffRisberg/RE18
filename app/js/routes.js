import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import Home from "./components/Home";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemFormContainer from "./components/Items/ItemFormContainer";
import EventListContainer from "./components/Events/EventListContainer";
import EventFormContainer from "./components/Events/EventFormContainer";

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
