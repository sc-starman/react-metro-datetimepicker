import React, { useRef } from 'react'

const MetroSelector = (props) => {
    const selectorRef = useRef(null)
    // selectorRef.current && selectorRef.current.scrollTo(0, (props.selectedValue * 38) - 38)
    return (
        <div ref={selectorRef} className="metro-selector">
            {props.values.map(value =>
                <span key={value}
                    style={{ background: props.selectedValue === value && '#19496F', color: props.selectedValue === value && '#fff' }}
                    className="metro-selector-item"
                    onClick={() => props.onSelectedValueChanged(value)}
                >
                    {value}
                </span>)}
        </div>
    )
}

export default MetroSelector
