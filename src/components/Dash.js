import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddBookModal } from './AddBookModal';

export class Dash extends React.Component {

    constructor(props){
        super(props);
        this.state ={booklist:[], addModalShow :false};
    }

  

    getBookList(){
        fetch('https://localhost:44394/api/Book/all')
        .then(response=> response.json())
        .then(data => {
         this.setState({booklist:data});
        })
        .catch(error =>
            {
                console.log(error);
            });
     }
     componentDidMount(){
        this.getBookList();
    }
  
    render(){
        const{booklist}= this.state;
        let addModalClose =() => this.setState({addModalShow:false});
        return(
            <div>
               <h3 className="m-3 d-flex justify-content-center">
                UsedBookStore</h3>
                <Table className="mt-4" striped bordered hover size="sm">

                    <thead>
                        <tr>
                        <td>Id</td>
                        <td >BookName </td>
                        <td>BookCondition</td>
                        <td>Category</td>
                        <td>Book_details</td>
                        <td>Author_Name</td>
                        <td>SellerID</td>

                        </tr>
                    </thead>
                    <tbody>
                        {booklist.map(book =>
                           <tr key ={book.Id}>
                            <td>{book.Id}</td>
                            <td>{book.BookName}</td>
                            <td>{book.BookCondition}</td>
                            <td>{book.Category}</td>
                            <td>{book.Book_details}</td>    
                            <td>{book.Author_Name}</td>
                            <td>{book.SellerID}</td>
                            <br/>
                           </tr>  )}
                    </tbody>
                </Table>

            <ButtonToolbar>
                <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>
                            Add Book
                </Button>
                <AddBookModal
                show={this.state.addModalShow}
                onHide={addModalClose}
                />
            </ButtonToolbar>
                            
            </div>
        )
    }
}