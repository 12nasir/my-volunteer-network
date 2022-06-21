import React from 'react';
import {Card, CardGroup, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './SingleHome.css'

const SingleHome = ({home}) => {
    const {id, img, name} = home;
    return (
        <div>
            <CardGroup>
                <Card className='card-container'>
                    <Card.Img className="image" variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <Link to={`/donation/${id}`}><Button>See details</Button></Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default SingleHome;