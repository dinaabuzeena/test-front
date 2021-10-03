
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

 class Update extends Component {
  render() {
    return (
      <>
   {/* <Modal show={this.props.showModal}  onHide={this.props.handelDispalyUpdatedModal}></Modal> */}
   <Modal  show={this.props.showModal}   onHide={this.props.handelDisplayUpdateModel}          >
  <Modal.Header closeButton>
    <Modal.Title>update FAV</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  


  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" name="frName" defaultValue={this.props.name} />
     </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control type="text" name="frImage" defaultValue={this.props.image}/>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>price</Form.Label>
    <Form.Control type="text" name="frPrice" defaultValue={this.props.price}/>
  </Form.Group>


  <Button variant="primary" type="submit">
    save
  </Button>
</Form>




  </Modal.Body>
</Modal>
















  

      </>
    )
  }
}

export default Update
