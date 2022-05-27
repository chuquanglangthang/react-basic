import React from 'react'

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
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
                                                {item.position} - {item.salary}
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