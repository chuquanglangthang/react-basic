import React from 'react'
import ChildComponent from './ChildComponent'
import MyForm from './MyForm'
class MyComponent extends React.Component {
    // each component has its own state
    state = {
        jobs: [
            {id: 'a1', position: 'Developer', salary: '500$' },
            {id: 'a2', position: 'Tester', salary: '350$' },
            {id: 'a3', position: 'QA', salary: '1500$' }
        ]
    }

    addNewJob = (job) => {
        console.log('Input from child: ', job)
        this.setState({
            jobs: [...this.state.jobs, job] // add job into current state => update state
        })
    }
    deleteAJob = (jobId) => {
        console.log('Deleted job\'s id: ', jobId)
        this.setState({
            jobs: this.state.jobs.filter(job => job.id !== jobId)
        })
    }

    // Lifecycle of a react app
    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update! ','previous state: ', prevState, ' ', 'current state: ', this.state)
    }

    componentDidMount() {
        console.log('Component did mount!')
    }

    // function written above render(){} block code

    render(){
        return (
            <>
                <MyForm
                    // passing a function to child component as props    
                    addNewJob={this.addNewJob} /> 
                <ChildComponent
                    // passing props to child component 
                    jobs={this.state.jobs}
                    deleteAJob={this.deleteAJob} />
            </>
        )
    }
}

export default MyComponent