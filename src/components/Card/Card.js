import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ topic }) {
    const { name, logo, total } = topic;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top img-fluid" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Total Elements: {total}
                </Card.Text>
                <Button variant="primary">Quiz Practice</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;