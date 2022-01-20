import React,{Component} from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import serverPath from '../doc/variables';

export default class BorrowBookScreen extends Component{
    constructor(props){
        super(props);

        this.onChangeBorrowedby=this.onChangeBorrowedby.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            bookname:'',
            borrowedby:'',
            imageurl:'',    //210218 added imageurl
            disabled:false
        }
    }

    componentDidMount(){
        axios.get(serverPath+'/books/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                bookname: response.data.bookname,
                imageurl: response.data.imageurl,   //210218 added imageurl
                borrowedby:'Adelina'
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
            action:'Borrow'
        }

        console.log(book);
        console.log(record);         //210218 Added record
        
        const borrowBookPost=async()=>{
            this.setState({disabled:true});
            try {
                const resp = await axios.post(serverPath+'/books/borrow/'+this.props.match.params.id,book);
                const resp2 = await axios.post(serverPath+'/records/add',record);         //210218 Added record
                console.log(resp.data);
                console.log(resp2.data);         //210218 Added record

                window.location='/';
            } catch (error) {
                console.error(error);
            } finally {
                this.setState({disabled:false});
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
                    value={this.state.borrowedby}
                    onChange={this.onChangeBorrowedby}>
                    <option value="Adelina">Adelina</option>
                    <option value="Alex Wong">Alex Wong</option>
                    <option value="Azhar">Azhar</option>
                    <option value="Eka">Eka</option>
                    <option value="Hashidee">Hashidee</option>
                    <option value="Izzat">Izzat</option>
                    <option value="Jessie">Jessie</option>
                    <option value="Kit Hong">Kit Hong</option>
                    <option value="Maxwell">Maxwell</option>
                    <option value="May Sheen">May Sheen</option>
                    <option value="Ming Zhao">Ming Zhao</option>
                    <option value="Mun Jun">Mun Jun</option>
                    <option value="Nasruddin">Nasruddin</option>
                    <option value="Ng">Ng</option>
                    <option value="Peter">Peter</option>
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
                <input type="submit" disabled={this.state.disabled} value="Borrow Book" className="btn btn-primary">
                </input>
              </div>
            </form>
          </div>
        )
    }
}