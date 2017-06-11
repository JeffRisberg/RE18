import React from 'react';
import SetListItems from './SetListItems';

class SetListDisplay extends React.Component {
    constructor() {
        super();

        //this.getUsersFromLocalStorage();

        this.setList = ['Alpha', 'Beta', 'Gamma'];
    }

    render() {
        return (
            <div>
                <SetListItems setList={this.setList}/>
                <div className="row">
                    <div className="col-md-4">Combi</div>
                    <div className="col-md-4">Program</div>
                    <div className="col-md-4">Sequencer</div>
                </div>
            </div>
        )
    }
}

export default SetListDisplay;