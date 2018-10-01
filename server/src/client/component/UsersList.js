import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UsersList extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(123);
        this.props.fetchUsers();
    }
    // renderUsers = ()=>{
    //     return this.props.users.map(user=>{
    //         return <li key={user.id}>{user.name}</li>
    //     })
    // }
    render(){
        console.log("this.props.users",this.props.users);
        return (
            <div>
                UsersList : 
                <ul>
                {this.props.users.map(user=>{
            return <li key={user.id}>{user.name}</li>
        })}
        </ul>
                </div>
        )
    }
}

function mapStateToProps(state){
return {users:state.users};
}
function loadData(store){
    return store.dispatch(fetchUsers());
    console.log("this is load data function");
}
export {loadData};
export default connect(mapStateToProps,{fetchUsers})(UsersList);