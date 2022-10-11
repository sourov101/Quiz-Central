import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({ topic }) {
    const { id, name, logo, total } = topic;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top img-fluid" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Total Elements: {total}
                </Card.Text>
                <Link to={`/home/${id}`}><Button variant="primary">Quiz Practice</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Cards;