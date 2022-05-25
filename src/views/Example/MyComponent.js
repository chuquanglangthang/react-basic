import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'John',
        age: 23,
        gender: 'Male'
    }

    render(){
        
        return (
            <>
                <div className="first">Hello from {this.state['name']}.</div>
                <div className="second">I am {this.state.age} years old.</div>
                <div className="third">My gender is {this.state.gender}.</div>
            </>
        )
    }
}

export default MyComponent