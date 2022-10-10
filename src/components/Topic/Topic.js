import React from 'react';

const Topic = ({ topic }) => {
    console.log(topic)
    const { name, logo, total } = topic;
    return (
        <div>
            {logo}
            {name}
            {total}
        </div>
    );
};

export default Topic;