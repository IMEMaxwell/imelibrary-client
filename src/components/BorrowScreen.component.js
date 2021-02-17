import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default class BorrowBookScreen extends Component{
    constructor(props){
        super(props);

        this.onChangeBookname=this.onChangeBookname.bind(this);
        this.onChangeBorrowedby=this.onChangeBorrowedby.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            bookname:'',
            borrowedby:'',
            date: new Date()
        }
    }

    componentDidMount(){
        axios.get('https://imelibrary.herokuapp.com/books/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                bookname: response.data.bookname,
                borrowedby:'Adelina'
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

        const borrowBookPost=async()=>{
            try {
                const resp = await axios.post('https://imelibrary.herokuapp.com/books/borrow/'+this.props.match.params.id,book);
                console.log(resp.data);

                window.location='/';
            } catch (error) {
                console.error(error);
            }
        };

        borrowBookPost();
    }
    
    render(){
        return(
            <div>
            <h3>Borrow Book</h3>
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
                    value={this.state.borrowedby}
                    onChange={this.onChangeBorrowedby}>
                    <option value="Adelina">Adelina</option>
                    <option value="Eka">Eka</option>
                    <option value="Fariz">Fariz</option>
                    <option value="Farra">Farra</option>
                    <option value="Hashidee">Hashidee</option>
                    <option value="Hidayah">Hidayah</option>
                    <option value="Izzat">Izzat</option>
                    <option value="Jessie">Jessie</option>
                    <option value="John">John</option>
                    <option value="Kit Hong">Kit Hong</option>
                    <option value="Maxwell">Maxwell</option>
                    <option value="Nasruddin">Nasruddin</option>
                    <option value="Ng">Ng</option>
                    <option value="Shamsul">Shamsul</option>
                    <option value="Shane">Shane</option>
                    <option value="SK">SK</option>
                    <option value="Syaiful">Syaiful</option>
                    <option value="Yew Kay">Yew Kay</option>
                    <option value="Yoke Ling">Yoke Ling</option>
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
                <input type="submit" value="Borrow Book" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}