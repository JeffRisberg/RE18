import React from 'react';
import SetListGridElement from './SetListGridElement';

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