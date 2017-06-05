import React from 'react';
import ReactDOM from 'react-dom';

class SetListItems extends React.Component {
    render() {
        return (
            <div>
                {this.props.setList.map(function (entry, index) {
                    return (
                        <div key={index} style={{width: 200, height: 40, background: '#ddd', padding: 4}}>
                            {entry}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SetListItems;