import React from 'react';
import Card from 'react-bootstrap/Card';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {


    const seeCorrect = () => {
        toast.info(`${quiz.correctAnswer}`, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const radioButton = (option) => {
        if (option === quiz.correctAnswer) {
            toast.success('Correct Answer !', {
                position: toast.POSITION.TOP_RIGHT
            });


        }
        else {
            toast.error('Incorrect Answer !', {
                position: toast.POSITION.TOP_RIGHT
            });

        }
    }

    return (
        <div>
            <div className='container'>
                <Card border="success" className='m-4'>
                    <Card.Header className='position-relative'>Question <FontAwesomeIcon onClick={seeCorrect} className='position-absolute top-0 end-0 m-2' icon={faEye} /></Card.Header>
                    <Card.Body>
                        <Card.Title>{quiz.question}</Card.Title>

                        {
                            quiz.options.map((option, idx) => <Options key={idx} option={option}
                                radioButton={radioButton}
                            ></Options>)
                        }

                    </Card.Body>
                </Card>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Quiz;