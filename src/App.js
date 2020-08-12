import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Nav, NavDropdown, Card, Navbar, Col, Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Item} from './Item';

import items from './item.json'


window.lst = []

function App() {
  
  function find_info(idP) {
    
    for (var i = 0 ; i < items.length ; i++)
    {
      if (items[i]["id"] == idP) {
        return items[i]
      }
    }
    return 'XD'
  }
  function find_image(idP) {
    
    for (var i = 0 ; i < items.length ; i++)
    {
      if (items[i]["id"] == idP) {
        return items[i]["image"]
      }
    }
    return 'XD'
  }
  function vide()
  {
    window.lst = []
    handleClose()
    setTimeout(() => {
      handleShow()
    }, 1);

  }

  
  let listitem = [ ]
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function fp(id){
    var index = window.lst.indexOf(id); // Let's say it's Bob.
    //alert(window.lst)
    //alert("looking for: " + id + " : " + index)
    window.lst.splice(index, 1);
    handleClose()
    setTimeout(() => {
      handleShow()
    }, 1);
  }

  return (
  [
    <Navbar style={{backgroundColor: "#071740", position: "sticky"}} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Gaétan's Frippes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Button onClick={handleShow}>
            Checkout The Cart
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>,

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {window.lst.map((id, idx) => (
          <ListGroup horizontal={id} className="my-2" key={idx}>
            <ListGroup.Item>
              <Card className="h-100 bg-white w-auto ">
                <Card.Img variant="top" src={find_image(id)} />
                <Card.Body className="d-flex flex-column">{find_info(id)["price"] + "$"}
                    <Card.Text className="">{find_info(id)["name"] + " " + find_info(id)["color"]}</Card.Text>
                    <Button
                        onClick={() => {fp(id)}}
                        className="mt-auto font-weight-bold btn btn-success"
                        >
                            Remove From cart</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Continue Shopping
        </Button>
        <Button onClick={() => vide()}>
          Order
        </Button>
      </Modal.Footer>
    </Modal>,
    
    <Container>
      <Col>
        {items.map(data => (
          <Col xs={9} className="mb-5" key={`${data.id}`}>
            <Item data={data}/>
          </Col>
        ))}
      </Col>

    </Container>]
    
  );
}

export default App;
