import React, { useState } from 'react'
import MetroPart from './components/MetroPart'
import MetroContainer from './components/MetroContainer'
import MetroPanel from './components/MetroPanel'
import MetroSelector from './components/MetroSelector'
import { range, setHours, getAmPmHours, getAmPmMin, getAmPm, toTwoDigit } from './utils'

const MetroTimePicker = (props) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <MetroContainer onClick={() => setIsPanelOpen(!props.isPanelOpen)} width={150}>
                <MetroPart value={getAmPmHours(date)} />
                <MetroPart value={getAmPmMin(date)} />
                <MetroPart value={getAmPm(date)} />
            </MetroContainer>
            <MetroPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
                <MetroSelector
                    values={range(1, 12)}
                    selectedValue={getAmPmHours(date)}
                    onSelectedValueChanged={(value) => {
                        setHours(date, `${value}:${getAmPmMin(date)}${getAmPm(date)}`)
                        const newDate=new Date(date)
                        setDate(newDate)
                        props.onChange(newDate)
                    }} />
                <MetroSelector
                    values={range(0, 59).map(v => toTwoDigit(v))}
                    selectedValue={toTwoDigit(getAmPmMin(date))}
                    onSelectedValueChanged={(value) => {
                        setHours(date, `${getAmPmHours(date)}:${value}${getAmPm(date)}`)
                        const newDate=new Date(date)
                        setDate(newDate)
                        props.onChange(newDate)
                    }} />
                <MetroSelector
                    values={['AM', 'PM']}
                    selectedValue={getAmPm(date)}
                    onSelectedValueChanged={(value) => {
                        setHours(date, `${getAmPmHours(date)}:${getAmPmMin(date)}${value}`)
                        const newDate=new Date(date)
                        setDate(newDate)
                        props.onChange(newDate)
                    }} />
            </MetroPanel>
        </div>
    )
}

export default MetroTimePicker
