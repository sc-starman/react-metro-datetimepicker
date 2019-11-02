import React, { useState } from 'react'
import MetroPart from './components/MetroPart'
import MetroContainer from './components/MetroContainer'
import MetroPanel from './components/MetroPanel'
import MetroSelector from './components/MetroSelector'
import { range } from './utils'

const MetroDatePicker = (props) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <MetroContainer onClick={() => setIsPanelOpen(!props.isPanelOpen)}>
                <MetroPart value={date.getMonth() + 1} />
                <MetroPart value={date.getDate()} />
                <MetroPart value={date.getFullYear()} />
            </MetroContainer>
            <MetroPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
                <MetroSelector values={range(1, 12).reverse()} selectedValue={date.getMonth() + 1} onSelectedValueChanged={(value) => {
                    const newDate = new Date(date.getFullYear(), value - 1, date.getDate())
                    setDate(newDate)
                    props.onChange(newDate)
                }} />
                <MetroSelector values={range(1, 30).reverse()} selectedValue={date.getDate()} onSelectedValueChanged={(value) => {
                    date.setDate(value)
                    const newDate = new Date(date)
                    setDate(newDate)
                    props.onChange(newDate)
                }} />
                <MetroSelector values={range(1900, 2019).reverse()} selectedValue={date.getFullYear()} onSelectedValueChanged={(value) => {
                    date.setFullYear(value)
                    const newDate = new Date(date)
                    setDate(newDate)
                    props.onChange(newDate)
                }} />
            </MetroPanel>
        </div>
    )
}

export default MetroDatePicker
