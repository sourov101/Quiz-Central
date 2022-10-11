import React from 'react';
import Card from 'react-bootstrap/Card';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const Quiz = ({ quiz }) => {
    if (quiz.Options === quiz.correctAnswer) {

    }
    const seeCorrect = () => {
        alert(quiz.correctAnswer)
    }


    return (
        <div>
            <div className='container'>
                <Card border="success" className='m-4'>
                    <Card.Header className='position-relative'>Question <FontAwesomeIcon onClick={seeCorrect} className='position-absolute top-0 end-0 m-2' icon={faEye} /></Card.Header>
                    <Card.Body>
                        <Card.Title>{quiz.question}</Card.Title>

                        {
                            quiz.options.map((option, idx) => <Options key={idx} option={option}></Options>)
                        }

                    </Card.Body>
                </Card>
            </div>


        </div>
    );
};

export default Quiz;