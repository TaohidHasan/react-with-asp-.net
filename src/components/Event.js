import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


export class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        Inventory: [],
        Books: []
    };
}


getBookTitle(bookID) {
    const book = this.state.Books.find(book => book.Id === bookID);
    return book ? book.Name : 'Book not found';
}
getAddress(bookID) {
    const book = this.state.Books.find(book => book.Id === bookID);
    return book ? book.Address : 'Book not found';
}



    getInventory(){
        fetch('https://localhost:44394/api/Event/all')
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
        fetch('https://localhost:44394/api/Location/all')
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
                        <td>EventID</td>
                        <td >Title </td>
                        <td>Description</td>
                        <td>Date </td>
                        <td>LocationID </td>
                        <td>Shop Name </td>
                        <td>Shop Address </td>

                        </tr>
                    </thead>
                    <tbody>
    {Inventory.map(item =>
        <tr key={item.LocationID}>
            <td>{item.LocationID}</td>
            <td>{item.Title}</td>
            <td>{item.Description}</td>
            <td>{item.Date}</td>
            <td>{item.LocationID}</td>

            <td>{this.getBookTitle(item.BookID)}</td>
            <td>{this.getAddress(item.BookID)}</td>

        </tr>
    )}
</tbody>

                </Table>

        
                            
            </div>
        )
    }
}