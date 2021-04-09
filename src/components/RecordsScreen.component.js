//210218 Added Records Screen
import React,{Component} from 'react';
import axios from 'axios';
import serverPath from '../doc/variables';

const Record=props=>(
    <tr>
        <td>{props.record.username}</td>
        <td>{props.record.bookname}</td>
        <td>{props.record.action}</td>
        <td>{new Date(props.record.createdAt).toLocaleDateString("en-GB",{day:'numeric',month:'short',year:'numeric'})}</td>
        <td>{new Date(props.record.createdAt).toLocaleTimeString("en-US")}</td>
    </tr>
)

export default class RecordsScreen extends Component{
    constructor(props){
        super(props);

        this.state={records:[]};
    }

    componentDidMount(){
        axios.get(serverPath+'/records/')
        .then(response=>{
            this.setState({records:response.data});
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    recordList(){
        return this.state.records
        .map(currentrecord=>{
            return <Record record={currentrecord} key={currentrecord._id}/>
        })
        .sort((a,b)=>new Date(b.props.record.createdAt)-new Date(a.props.record.createdAt))
    }

    render(){
        return(
            <div>
                <h3>Records</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Username</th>
                    <th>Bookname</th>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    { this.recordList()}
                </tbody>
                </table>
            </div>
        )
    }
}