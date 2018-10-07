import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsListPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchAdmins();
    }
    renderAdmins() {
        return this.props.admins.map((admin) => {
            return <li key={admin.id}>{admin.name}</li>
        });
    }
    render() {
        return (
            <div>
                <h3>List Of Admins</h3>
                <ul>{
                    this.props.admins.map((admin) => {
                        return <li key={admin.id}>{admin.name}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ admins }) {
    return { admins }
}
export default {
    component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
}