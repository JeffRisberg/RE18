import React from 'react';

class SetListSlotDisplay extends React.Component {

    render() {
        return (
            <div className="row" style={{  padding: '10px', backgroundColor: '#333', color: 'white' }}>
                <div className="col-md-3">
                    Name
                </div>
                <div className="col-md-3">
                    Set
                </div>
                <div className="col-md-3">
                    Color
                </div>
                <div className="col-md-3">
                    Comment
                </div>
            </div>
        )
    }
}

export default SetListSlotDisplay;