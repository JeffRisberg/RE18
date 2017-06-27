import React from 'react';
import SetListGridElement from './SetListGridElement';

import './SetList.scss';

class SetListGrid extends React.Component {

    constructor() {
        super();

        //this.getUsersFromLocalStorage();

        this.setListSlots = ['Alpha', 'Beta', 'Gamma'];
    }

    render() {

        const setListGridElements = setListSlots.map(slot => {
            return new SetListGridElement(slot);
        })

        return (
            <div>
                {setListGridElements}
            </div>
        )
    }
}

export default SetListGrid;