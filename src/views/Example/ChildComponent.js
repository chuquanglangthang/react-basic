import React from 'react'

class ChildComponent extends React.Component {
    render() {
        console.log('>>> check props: ', this.props)
        // let name = this.props.name
        // let age = this.props.age

        let {name,age} = this.props
        return (
            <>
                <div>
                    name: {name}
                    <br/>
                    age: {age}
                </div>
            </>
        )
    }
}

export default ChildComponent