import React, { useState } from 'react'
import MetroDatePicker from './MetroDatePicker'
import MetroTimePicker from './MetroTimePicker'
import { setHours, formatAMPM } from './utils'

const MetroDateTimePicker = () => {
    const [date, setDate] = useState(new Date())
    console.log(date)
    return (
        <div style={{ display: 'flex' }}>
            <MetroDatePicker onChange={(value) => {
                date.setFullYear(value.getFullYear())
                date.setMonth(value.getMonth())
                date.setDate(value.getDate())
                setDate(new Date(date))
            }} />
            <MetroTimePicker onChange={(value) => {
                setHours(date, formatAMPM(value))
                setDate(new Date(date))
            }} />
        </div>
    )
}

export default MetroDateTimePicker
