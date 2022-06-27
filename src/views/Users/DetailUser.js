import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import './DetailUser.scss'

class DetailUser extends React.Component {

    state = {
        users: []
    }

    async componentDidMount() {
       // get the id in the url
        let id = this.props.match.params.id
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        // console.log(res)
        this.setState({
            users: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleBackToListUsers = () => {
        this.props.history.push('/user')
    }

    render() {
        // console.log('check props: ', this.props)
        // console.log(this.state.users)
        let { users } = this.state
        let isEmptyObj = Object.keys(users).length === 0
        return (
            <div className="detail-user-container">
                <div className="detail-user-title">
                    Hello from Detail User with id: {this.props.match.params.id}
                </div>
                {
                    isEmptyObj === false && 
                        <div className="detail-user-content">
                            <div>User's name: {users.first_name} {users.last_name}</div>
                            <div>User's email: {users.email}</div>
                            <img src={users.avatar} alt=""/>
                            <button type="button" onClick={() => this.handleBackToListUsers()}>Back</button>
                        </div>
                }
            </div>
        )
    }
}

export default withRouter(DetailUser)
