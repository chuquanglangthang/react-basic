import React from 'react'
import ChildComponent from './ChildComponent'
import MyForm from './MyForm'
class MyComponent extends React.Component {
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
    render(){
        return (
            <>
                <MyForm
                    //passing a function to child component as props    
                    addNewJob={this.addNewJob} /> 
                <ChildComponent 
                    jobs={this.state.jobs}
                    deleteAJob={this.deleteAJob} />
            </>
        )
    }
}

export default MyComponent