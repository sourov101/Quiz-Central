import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data);
    return (
        <div>
            <h1>Welcome to Quiz Central!!!</h1>
            <p>Topics: {topics.data.length}</p>

        </div>
    );
};

export default Topics;