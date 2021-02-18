import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Book=props=>(

    <tr>
        <td>{props.book.bookname}</td>
        <td>
            {<Link to={"/edit/"+props.book._id}>Edit</Link>} | <a href="#" onClick={()=>{props.deleteBook(props.book._id)}}>Delete</a>
        </td>
    </tr>
)

export default class HomeScreen extends Component{
    constructor(props){
        super(props);

        this.deleteBook=this.deleteBook.bind(this);

        this.state={books:[]};
    }

    deleteBook(id){
        axios.delete('https://imelibrary.herokuapp.com/books/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            books:this.state.books.filter(el=>el._id!==id)
        })
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
            return <Book book={currentbook} deleteBook={this.deleteBook} key={currentbook._id}/>
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