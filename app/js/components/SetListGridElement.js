import React from 'react';
import ReactDOM from 'react-dom';

class SetListGridElement extends React.Component {

    render() {
        return (
            <div className="col-md-4" style={{margin: '10px', border: '1px solid red', padding: '10px'}}>
                {this.props.slotName}
            </div>
        )
    }
}

export default SetListGridElement;