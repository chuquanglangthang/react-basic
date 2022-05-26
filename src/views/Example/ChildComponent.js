import React from 'react'

class ChildComponent extends React.Component {
    render() {
        console.log('>>> check props: ', this.props)
        // let name = this.props.name
        // let age = this.props.age

        let {name, age, address, jobs} = this.props
        let a = '' 
        return (
            <>
                <div>
                    name: {name}
                    <br/>
                    age: {age}
                    <br/>
                    address: {address}
                </div>
                <div className="job-lists">
                    {
                        a = jobs.map((item,index) => {
                            return (
                                <div key={item.id} className={`job-id-${item.id}`}>
                                    {item.position} - {item.salary}
                                </div>
                            )
                        })
                    }
                    {
                        console.log('>>> check a: ', a)
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent