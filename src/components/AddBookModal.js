import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddBookModal extends Component{
    constructor(props){
        super(props);
      

    }



    handleSubmit(event){

        event.preventDefault();
        fetch('https://localhost:44394/api/Book/add',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            id:null,
            BookName: event.target.BookName.value,
            BookCondition: event.target.BookCondition.value,
            Category: event.target.Category.value,
            Book_details: event.target.Book_details.value,
            Author_Name: event.target.Author_Name.value,
            SellerID: event.target.SellerID.value

          })
        })
        .then(res=> res.json())
        .then((result)=>
        {
            alert(result);
            //this.setState({snackbaropen:true, snackbarmsg:result});
        }
        )
    }

    render(){
        return(


            <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          
        <div className="container">
          <Row>
          <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>

                
              <Form.Group controlId="BookName">
              <Form.Label>BookName</Form.Label>
              <Form.Control
                type="text"
                name="BookName"
                required
                placeholder="Name"
               />
              </Form.Group>
              
              <Form.Group controlId="BookCondition">
              <Form.Label>BookCondition</Form.Label>
              <Form.Control
                type="text"
                name="BookCondition"
                required
                placeholder="BookCondition"
               />
              </Form.Group>

              <Form.Group controlId="Category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="Category"
                required
                placeholder="Category"
               />
              </Form.Group>

              <Form.Group controlId="Book_details">
              <Form.Label>Book_details</Form.Label>
              <Form.Control
                type="text"
                name="Book_details"
                required
                placeholder="Book_details"
               />
              </Form.Group>
              <Form.Group controlId="Author_Name">
              <Form.Label>User_type</Form.Label>
              <Form.Control
                type="text"
                name="Author_Name"
                required
                placeholder="Author_Name"
               />
              </Form.Group>
              <Form.Group controlId="SellerID">
              <Form.Label>shop_name</Form.Label>
              <Form.Control
                type="number"
                name="SellerID"
                required
                placeholder="SellerID"
               />
              </Form.Group>


              <Form.Group>
                  <Button variant="primary" type="submit">
                  Add Book
                  </Button>
              </Form.Group>
              </Form>
              </Col>
          </Row>

         
      </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

        );
    }

}