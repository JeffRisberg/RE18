import React from 'react';

import SetListGrid from '../components/SetListGrid';
import SetListSlotEdit from '../components/SetListSlotEdit';

class SetListEdit extends React.Component {

    render() {
        return (
            <div>
                <SetListSlotEdit/>
                <SetListGrid/>
            </div>
        )
    }
}

export default SetListEdit;