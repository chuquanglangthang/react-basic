import React from 'react'

class MyComponent extends React.Component {
    render(){
        let name = 'John'
        return (
            <React.Fragment>
                <p>Hello from {name}</p>
                <p>Hello from {name}</p>
            </React.Fragment>
        )
    }
}

export default MyComponent