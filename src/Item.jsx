import React from 'react';

import {Card, Badge, Button } from 'react-bootstrap';
import { register } from './serviceWorker';



export function Item({data}) {


    function addToCart(id){
        window.lst.push(id)
    }


    return (
        <Card className="h-100 bg-white w-auto ">
            <Card.Img variant="top" src={data.image} />
            <Card.Body className="d-flex flex-column">{data.price + "$"}
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>

                    
                    <Button
                        onClick={() => {addToCart(data.id)}}
                        className="mt-auto font-weight-bold btn btn-success"
                        >
                            Add to Cart</Button>
                </div>
                <Card.Text className="">{data.category + " " + data.size + " " + data.color}</Card.Text>
            </Card.Body>
        </Card>
    )
}