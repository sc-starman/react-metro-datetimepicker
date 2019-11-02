import React, { useRef, useEffect } from 'react'
import CancelIcon from '../assets/CancelIcon'
import CheckmarkIcon from '../assets/CheckmarkIcon'

const MetroPanel = (props) => {
    const wrapperRef = useRef(null);

    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target) & props.isOpen) {
            props.onClose()
        }
    }


    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });





    return (
        <div ref={wrapperRef} style={{ display: !props.isOpen && 'none' }} className="metro-panel">
            <div className="metro-panel-items">{props.children}</div>
            <div className="metro-panel-icons">
                <div className="metro-icon-container" onClick={() => props.onClose()}>
                    <CheckmarkIcon />
                </div>
                <div className="metro-icon-container" onClick={() => props.onClose()}>
                    <CancelIcon />
                </div>
            </div>
        </div>
    )
}

export default MetroPanel
