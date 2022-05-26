import React from 'react'

const FunctionComponent = (props) => {
    console.log('>>> check props: ', props)
    let {jobs} = props
    return (
        <>
            <div className="job-lists">
                {
                    jobs.map((item,index) => {
                        return (
                            <div key={item.id}>
                                {item.position}: {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FunctionComponent


