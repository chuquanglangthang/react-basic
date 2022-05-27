import React from 'react'

class Greeting extends React.Component {
    state = {
        name: 'John',
        age: 23,
        gender: 'Male',
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnClickButton = () => {
        alert('Clicked!')
    }
    render() {
        return (
            <>
                <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={(event) => this.handleOnChangeName(event)} />
                <div 
                    className="first">
                    Hello from {this.state['name']}.
                </div>
                <button 
                    onClick={() => this.handleOnClickButton()}>
                    Click me
                </button>
            </>
        )
    }
}

export default Greeting