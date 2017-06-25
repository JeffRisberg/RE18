import React from 'react';

import SetListGrid from '../components/SetListGrid';
import SetListSlotDisplay from '../components/SetListSlotDisplay';

class SetListPlay extends React.Component {

    render() {
        return (
            <div>
                <SetListSlotDisplay/>
                <SetListGrid/>
            </div>
        )
    }
}

export default SetListPlay;