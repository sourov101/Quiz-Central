import React from 'react';
import Form from 'react-bootstrap/Form';

const Forms = ({ option, radioButton }) => {

    return (
        <div>
            <Form >
                {['radio'].map((type) =>

                    <div key={type} className="mb-3">

                        <Form.Check.Input type={type} isValid onClick={() => radioButton(option)} />
                        <Form.Check.Label >{option}</Form.Check.Label>
                        <Form.Control.Feedback type="valid">

                        </Form.Control.Feedback>

                    </div>

                )}
            </Form>
        </div>
    );
};

export default Forms;