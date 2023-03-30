
import {Alert} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react';




function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

<>
   <Container className='bg-light'>

<Alert variant='danger'>
Alert - Notification 
</Alert>

<Button variant="primary" onClick={handleShow}>
Launch demo modal
</Button>
<br/>

<ButtonGroup>
<Button variant='primary' className='p-5'>First</Button>
<Button className='thirdbutton'>Second</Button>
<Button variant='danger'>Third</Button>
<Button>Fourth</Button>
</ButtonGroup>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>

<Accordion defaultActiveKey="5">
<Accordion.Item eventKey="5">
<Accordion.Header>Accordion Item #1</Accordion.Header>
<Accordion.Body className='bodytext'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="10">
<Accordion.Header>Accordion Item #2</Accordion.Header>
<Accordion.Body className='bodytext'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.
</Accordion.Body>
</Accordion.Item>
</Accordion>


</Container>
</>
  )
}


export default App