import React,{Component} from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import serverPath from '../doc/variables';

export default class CreateBookScreen extends Component{
    constructor(props){
        super(props);

        this.onChangeBookname=this.onChangeBookname.bind(this);
        this.onChangeQty=this.onChangeQty.bind(this);
        this.onChangeTotalqty=this.onChangeTotalqty.bind(this);
        this.onChangeImageurl=this.onChangeImageurl.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            bookname:'',
            qty:0,
            totalqty:0,
            imageurl:'',
            disabled:false
        }
    }

    onChangeBookname(e){
        this.setState({
            bookname:e.target.value
        });
    }

    onChangeQty(e){
        this.setState({
            qty:e.target.value
        });
    }

    onChangeTotalqty(e){
        this.setState({
            totalqty:e.target.value
        });
    }

    onChangeImageurl(e){
        this.setState({
            imageurl:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const book ={
            bookname:this.state.bookname,
            qty:this.state.qty,
            totalqty:this.state.totalqty,
            imageurl:this.state.imageurl,
        }

        console.log(book);

        const createBookPost=async()=>{
            this.setState({disabled:true});
            try {
                const resp=await axios.post(serverPath+'/books/add',book);
                console.log(resp.data);

                window.location='/';
            } catch (error) {
                console.error(error);
            } finally {
                this.setState({disabled:false});
            }
        };

        createBookPost();
    }
    
    render(){
        return(
            <div>
            <h3>Create New Book</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Bookname: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.bookname}
                    onChange={this.onChangeBookname}
                    />
              </div>
              <div className="form-group"> 
                <label>Qty: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.qty}
                    onChange={this.onChangeQty}
                    />
              </div>
              <div className="form-group"> 
                <label>Total Qty: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.totalqty}
                    onChange={this.onChangeTotalqty}
                    />
              </div>
              <div className="form-group"> 
                <label>Image URL: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.imageurl}
                    onChange={this.onChangeImageurl}
                    />
              </div>
              <div>
                  <img 
                    src={this.state.imageurl}
                    alt={this.state.book}
                  />
              </div>      
              <div className="form-group">
                <input type="submit" disabled={this.state.disabled} value="Create New Book" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}