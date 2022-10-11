import React from 'react';
import Card from 'react-bootstrap/Card';
const Blog = () => {
    return (
        <div className='container'>
            <Card border="success" className='m-4'>
                <Card.Header className='position-relative'>What is the purpose of react router? </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Answer:
                    </Card.Title>
                    React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates.

                </Card.Body>
            </Card>
            <Card border="info" className='m-4'>
                <Card.Header className='position-relative'>How does context api work? </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Answer:
                    </Card.Title>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

                </Card.Body>
            </Card>
            <Card border="warning" className='m-4'>
                <Card.Header className='position-relative'>What do you know about useRef Hook?</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Answer:
                    </Card.Title>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. useRef() only returns one item. It returns an Object called current.

                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;