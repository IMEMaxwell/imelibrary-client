import React,{Component} from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"

export default class ReturnBookScreen extends Component{
    constructor(props){
        super(props);

        this.onChangeBorrowedby=this.onChangeBorrowedby.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            bookname:'',
            borrowedby:'',
            imageurl:'',    //210218 added imageurl
            users:[],
            disabled:false
        }
    }

    componentDidMount(){
        axios.get('https://imelibrary.herokuapp.com/books/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                bookname: response.data.bookname,
                imageurl: response.data.imageurl,   //210218 added imageurl
                users:response.data.borrowedby,
                borrowedby:response.data.borrowedby[0]
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onChangeBorrowedby(e){
        this.setState({
            borrowedby:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const book ={
            bookname:this.state.bookname,
            borrowedby:this.state.borrowedby,
        }

        //210218 Added record
        const record ={
            username:this.state.borrowedby,
            bookname:this.state.bookname,
            action:'Return'
        }

        console.log(book);
        console.log(record);         //210218 Added record

        const returnBookPost=async()=>{
            this.setState({disabled:true});
            try {
                const resp = await axios.post('https://imelibrary.herokuapp.com/books/return/'+this.props.match.params.id,book);
                const resp2 = await axios.post('https://imelibrary.herokuapp.com/records/add',record);         //210218 Added record
                console.log(resp.data);
                console.log(resp2.data);         //210218 Added record
                
                window.location='/';
            } catch (error) {
                console.error(error);
            } finally {
                this.setState({disabled:false});
            }
        };

        returnBookPost();
    }
    
    render(){
        return(
            <div>
            <h3>Return Book</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Bookname: </label>
                <input  type="text"
                    required
                    readOnly
                    className="form-control"
                    value={this.state.bookname}
                    onChange={this.onChangeBookname}
                    />
              </div>
              <div>
                  <img
                    src={this.state.imageurl}
                    alt={this.state.bookname} 
                  />
              </div>

              <div className="form-group">
                <label>Borrowed By: </label>
                <div>
                <select
                    required
                    className="form-control"
                    value={this.state.borrowedby}
                    onChange={this.onChangeBorrowedby}>
                    {
                        this.state.users.map(function(user){
                            return <option
                                key={user}
                                value={user}>{user}
                            </option>;
                        })
                    }
                </select>
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" disabled={this.state.disabled} value="Return Book" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}