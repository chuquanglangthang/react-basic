import React from 'react'
import ChildComponent from './ChildComponent'
class MyComponent extends React.Component {

    state = {
        name: 'John',
        age: 23,
        gender: 'Male',
        jobs: [
            {id: 'a1', position: 'Developer', salary: '500$' },
            {id: 'a2', position: 'Tester', salary: '350$' },
            {id: 'a3', position: 'QA', salary: '1500$' }
        ]
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnClickButton = () => {
        alert('Clicked!')
    }

    render(){
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
                <div 
                    className="second">
                    I am {this.state.age} years old.
                </div>
                <div 
                    className="third">
                    My gender is {this.state.gender}.</div>
                <button 
                    onClick={() => this.handleOnClickButton()}>
                    Click me
                </button>

                <ChildComponent 
                    name={this.state.name}
                    age={'22'}
                    address={'Hanoi'}
                    jobs={this.state.jobs} />
            </>
        )
    }
}

export default MyComponent