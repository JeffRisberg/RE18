import fetch from "isomorphic-fetch";
import {push} from "react-router-redux";
import {ActionTypes as types} from "../constants";

export const querySetLists = () => {
    return function (dispatch) {

        return fetch('/api/setLists', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: types.RESET_SETLISTS,
                        events: json.data
                    });
            });
    };
};
