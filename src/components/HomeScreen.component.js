import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Book=props=>(

    <tr>
        <td>{props.book.bookname}</td>
        <td>{props.book.qty} / {props.book.totalqty}</td>
        <td>{props.book.borrowedby.join(", ")}</td>
        <td>
            {props.book.qty!==0 && <Link to={"/borrow/"+props.book._id}>Borrow</Link>} | {props.book.totalqty>props.book.qty && <Link to={"/return/"+props.book._id}>Return</Link>}
        </td>
    </tr>
)

export default class HomeScreen extends Component{
    constructor(props){
        super(props);

        this.state={books:[]};
    }

    componentDidMount(){
        axios.get('https://imelibrary.herokuapp.com/books/')
        .then(response=>{
            this.setState({books:response.data});
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    bookList(){
        return this.state.books
        .map(currentbook=>{
            return <Book book={currentbook} key={currentbook._id}/>
        })
        .sort((a,b)=>a.props.book.bookname.localeCompare(b.props.book.bookname))
    }

    render(){
        return(
            <div>
                <h3>Books</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Bookname</th>
                    <th>Qty / Total</th>
                    <th>Borrowed By</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.bookList() }
                </tbody>
                </table>
            </div>
        )
    }
}