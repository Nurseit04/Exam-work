import React from 'react';
import {Card, Button} from "react-bootstrap";

const Item = ({item}) => {
    return (
        <div className="col-md-4 mt-4">
            <Card>
                <Card.Img variant="top" src={item.images[0].original}/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;