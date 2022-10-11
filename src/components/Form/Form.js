import React from 'react';
import Form from 'react-bootstrap/Form';

const Forms = ({ option }) => {

    const radioButton = () => {
        console.log('click')
    }

    return (
        <div>
            <Form >
                {['radio'].map((type) =>

                    <div key={type} className="mb-3">

                        <Form.Check.Input type={type} isValid />
                        <Form.Check.Label onClick={radioButton}>{option}</Form.Check.Label>
                        <Form.Control.Feedback type="valid">

                        </Form.Control.Feedback>

                    </div>

                )}
            </Form>
        </div>
    );
};

export default Forms;