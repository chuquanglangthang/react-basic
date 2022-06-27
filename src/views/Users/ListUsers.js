import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import './ListUsers.scss'

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        // console.log(this.state.listUsers)  
    }

    handleViewDetailUser = (userId) => {
        // console.log(user)
        this.props.history.push(`/user/${userId}`)
    }

    render() {
        let { listUsers } = this.state
        return (
            <div className="list-users-container">
                <div className="list-users-title">
                    Fetch all list users
                </div>
                <div className="list-users-content">
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((singleUser, index) => {
                            return (
                                <div className="list-users-child" key={singleUser.id} onClick={() => this.handleViewDetailUser(singleUser.id)}>
                                    <span>
                                        {index + 1}: {singleUser.first_name} {singleUser.last_name}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUsers)