import React from 'react';
import Cards from '../Card/Card';

const Topic = ({ topic }) => {


    return (
        <div >

            <Cards topic={topic}></Cards>

        </div>
    );
};

export default Topic;