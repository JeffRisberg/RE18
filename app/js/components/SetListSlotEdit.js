import React from 'react';

class SetListSlotEdit extends React.Component {

    render() {
        return (
            <div className="row" style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
                <div className="col-md-3">
                    <span className="label">Name</span>
                    <input type="text" name="name"/>
                </div>
                <div className="col-md-3">
                    <span className="label">Set</span>
                    <input type="text" name="set"/>
                </div>
                <div className="col-md-3">
                    <span className="label">Color</span>
                    <select>
                        <option>Black</option>
                        <option>White</option>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Cyan</option>
                        <option>Orange</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <span className="label">Comment</span>
                    <input type="text" name="comment"/>
                </div>
            </div>
        )
    }
}

export default SetListSlotEdit;