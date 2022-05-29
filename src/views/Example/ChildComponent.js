import React from 'react'
import './demo.scss'
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleDelete = (item) => {
        // alert("Deleted!")
        // console.log(item.id)
        this.props.deleteAJob(item.id)
    }
    render() {
        let { jobs } = this.props
        let { showJobs } = this.state
        let checkCondition = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log('checkCondition: ', checkCondition)
        return (
            <>
                {showJobs === false
                    ?
                        <div><button type="button" onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                        <>
                            <div className="job-lists">
                                {
                                    jobs.map((item, index) => {
                                        return (
                                                <div key={item.id} className={`job-id-${item.id}`}>
                                                    <span>{item.position} - {item.salary}</span>
                                                    <span>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => this.handleDelete(item)}>
                                                            Delete
                                                        </button> 
                                                        {/* we don't have parameter inside () befor => 
                                                        because we want to access to each item inside the jobs in parent
                                                        component's state */}
                                                    </span>
                                                </div>

                                        )
                                    })
                                }
                            </div>
                            <div><button type="button" onClick={() => this.handleShowHide()}>Hide</button></div>
                        </>
                }

            </>
        )
    }
}

export default ChildComponent