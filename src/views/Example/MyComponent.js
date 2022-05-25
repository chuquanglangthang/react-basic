import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'John',
        age: 23,
        gender: 'Male'
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        
        return (
            <>
                <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                <div className="first">Hello from {this.state['name']}.</div>
                <div className="second">I am {this.state.age} years old.</div>
                <div className="third">My gender is {this.state.gender}.</div>
            </>
        )
    }
}

export default MyComponent