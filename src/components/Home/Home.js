import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';
const Home = () => {
    const data = useLoaderData();
    const topics = data.data;

    return (
        <div >

            <div className='d-flex header justify-content-around align-items-center mb-5 shadow '>
                <img src='quiz.jpg' alt=''></img>
                <div>
                    <h1>Take your Quiz</h1>
                    <h3>Quiz On Topics: {topics.length}</h3>
                    <p>You can take quiz on JS, Git, React and CSS </p>
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