import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const data = useLoaderData();
    const topics = data.data;

    return (
        <div>
            <h1>Welcome to Quiz Central!!!</h1>
            <p>Topics: {topics.length}</p>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;