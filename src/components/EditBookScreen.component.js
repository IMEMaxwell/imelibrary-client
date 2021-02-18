import React,{Component} from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"

export default class EditBookScreen extends Component{
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

    componentDidMount(){
        axios.get('https://imelibrary.herokuapp.com/books/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                bookname:response.data.bookname,
                qty:response.data.qty,
                totalqty:response.data.totalqty,
                imageurl:response.data.imageurl,
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
                const resp=await axios.post('https://imelibrary.herokuapp.com/books/edit/'+this.props.match.params.id,book);
                console.log(resp.data);

                window.location='/manage-book';
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
            <h3>Edit Book</h3>
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
                <input type="submit" disabled={this.state.disabled} value="Edit Book" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}