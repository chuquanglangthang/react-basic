import React from 'react'
// import {withRouter} from 'react-router'
import Color from '../HOC/Color'
import city from '../../assets/images/city.jpg'

import { connect } from 'react-redux'

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo') // props of React Router, it contains many props. history is one of them
    //     },2000)
    // }

    handleDeleteUser = (userDelete) => {
        this.props.deleteUserRedux(userDelete) // recall action in ROOT REDUCER
    }
    handleCreateUser = () => {
        this.props.createUserRedux()
    }

    render() {
        console.log("check props: ", this.props)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>Hello World!</div>
                <div>
                    <img src={city} alt="" width={"500px"} />
                </div>
                <div>
                    {
                        listUsers && listUsers.length &&
                        listUsers.map((singleUser, index) => {
                            return (
                                <div key={singleUser.id}>
                                    <span>
                                        {index + 1} - {singleUser.name}
                                        <button type="button" onClick={() => this.handleDeleteUser(singleUser)}>Delete</button>
                                    </span>
                                </div>
                            )
                        })
                    }
                    <button type="button" onClick={() => this.handleCreateUser()}>Create</button>
                </div>
            </>
        )
    }
}

// State here is Redux's state
// Get data from Redux store    
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

// Connect REDUX to REACT
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))