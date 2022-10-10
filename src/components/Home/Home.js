import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';
const Home = () => {
    const data = useLoaderData();
    const topics = data.data;

    return (
        <div >

            <div className='d-flex header justify-content-around align-items-center mb-5'>
                <img src='quiz.jpg' alt=''></img>
                <div>
                    <h1>Welcome to Quiz Central!!!</h1>
                    <h3>Quiz On Topics: {topics.length}</h3>
                </div>
            </div>
            <div className='topics mt-5'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;