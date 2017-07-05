import React from 'react';
import SetListGridElement from './SetListGridElement';
import './SetList.scss';

class SetListGrid extends React.Component {

    constructor() {
        super();

        this.setListSlots = ['Alpha', 'Beta', 'Gamma', 'Delta'];
    }

    render() {

        const setListGridElements = this.setListSlots.map((slot, key) => {
            return (
                <SetListGridElement slotName={slot} key={key} />
            );
        })

        return (
            <div className="row" style={{ width: '400px' }}>
                {setListGridElements}
            </div>
        )
    }
}

export default SetListGrid;