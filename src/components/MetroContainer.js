import React from 'react'

const MetroContainer = (props) => {
    return (
        <div className="metro-container" {...props}>
            {props.children}
        </div>
    )
}

export default MetroContainer
