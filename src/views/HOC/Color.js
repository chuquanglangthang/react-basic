import React from 'react'
function getRandomColor() {
    let letter = '0123456789ABCDEF'
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color
}

const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor()
    // props here are recieved from Home.js
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props}/>   
        </div>
    )
}

/**
    Why do we have 'props' inside return?
    -> Props here are Home.js's props
    -> WrappedComponent here is Home.js
    ==> We must bring all props that Home.js have, otherwise our app will be broken
 */

export default Color