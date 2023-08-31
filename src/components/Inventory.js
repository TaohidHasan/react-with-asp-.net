import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


export class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        Inventory: [],
        Books: []
    };
}


getBookTitle(bookID) {
    const book = this.state.Books.find(book => book.Id === bookID);
    return book ? book.BookName : 'Book not found';
}

getAuthor_Name(bookID) {
    const book = this.state.Books.find(book => book.Id === bookID);
    return book ? book.Author_Name : 'Book not found';
}


    getInventory(){
        fetch('https://localhost:44394/api/Inventory/all')
        .then(response=> response.json())
        .then(data => {
         this.setState({Inventory:data});
        })
        .catch(error =>
            {
                console.log(error);
            });
     }
     componentDidMount() {
        this.getInventory();
        fetch('https://localhost:44394/api/Book/all')
            .then(response => response.json())
            .then(data => {
                this.setState({ Books: data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
  
    render(){
        const{Inventory}= this.state;
        return(
            <div>
               <h3 className="m-3 d-flex justify-content-center">
                UsedBookStore</h3>
                <Table className="mt-4" striped bordered hover size="sm">

                    <thead>
                        <tr>
                        <td>InventoryId</td>
                        <td >Quantity </td>
                        <td>Location</td>
                        <td>BookID </td>
                        <td>BookName </td>
                        <td>Author Name </td>


                        </tr>
                    </thead>
                    <tbody>
    {Inventory.map(item =>
        <tr key={item.InventoryID}>
            <td>{item.InventoryID}</td>
            <td>{item.Quantity}</td>
            <td>{item.Location}</td>
            <td>{item.BookID}</td>
            <td>{this.getBookTitle(item.BookID)}</td>
            <td>{this.getAuthor_Name(item.BookID)}</td>
        </tr>
    )}
</tbody>

                </Table>

        
                            
            </div>
        )
    }
}