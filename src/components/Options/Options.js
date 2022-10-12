import React from 'react';
import Forms from '../Form/Form';

const Options = ({ option, radioButton }) => {

    return (
        <div>
            <Forms option={option} radioButton={radioButton}
            ></Forms>
        </div>
    );
};

export default Options;