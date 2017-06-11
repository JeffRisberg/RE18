import {handleActions} from "redux-actions";
import {ActionTypes as types} from "../constants";

export default handleActions({
    [types.RESET_SETLISTS]: (state, action) => {
        const idList = [];
        const records = {};

        action.setLists.forEach(record => {
            records[record.id] = record;
            idList.push(record.id);
        });

        return {idList, records};
    },

    [types.APPEND_SETLISTS]: (state, action) => {
        const idList = state.idList;
        const records = state.records;

        action.setLists.forEach(record => {
            const id = record.id;

            if (idList.indexOf(id) < 0) idList.push(id);
            records[id] = record;
        });

        return {idList, records};
    }
}, {idList: [], records: {}});
