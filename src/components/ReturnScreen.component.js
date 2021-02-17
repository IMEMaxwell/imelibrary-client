import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default class ReturnBookScreen extends Component{
    constructor(props){
        super(props);

        this.onChangeBookname=this.onChangeBookname.bind(this);
        this.onChangeBorrowedby=this.onChangeBorrowedby.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            bookname:'',
            borrowedby:'',
            date: new Date(),
            users:[]
        }
    }

    componentDidMount(){
        axios.get('https://imelibrary.herokuapp.com/books/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                bookname: response.data.bookname,
                users:response.data.borrowedby,
                borrowedby:response.data.borrowedby[0]
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onChangeBookname(e){
        this.setState({
            bookname:e.target.value
        });
    }

    onChangeBorrowedby(e){
        this.setState({
            borrowedby:e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date:date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const book ={
            bookname:this.state.bookname,
            borrowedby:this.state.borrowedby,
            date:this.state.date,
        }

        console.log(book);

        const returnBookPost=async()=>{
            try {
                const resp = await axios.post('https://imelibrary.herokuapp.com/books/return/'+this.props.match.params.id,book);
                console.log(resp.data);
                
                window.location='/';
            } catch (error) {
                console.error(error);
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
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Return Book" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}