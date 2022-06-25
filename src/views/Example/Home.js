import React from 'react'
// import {withRouter} from 'react-router'
import Color from '../HOC/Color'

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo') // props of React Router, it contains many props. history is one of them
    //     },2000)
    // }

    render(){
        // console.log(this.props)
        return(
            <>
                <div>Hello World!</div>
            </>
        )
    }
}

export default Color(Home)