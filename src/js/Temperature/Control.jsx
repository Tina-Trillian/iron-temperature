import React from 'react'

// TODO display an input with for the temperature in the given type
const Control = props => {
    return (<div>
    {props.type} °
    <input
    onChange={(event) => props.handleTempChange(event, props.type)}
    type="number"
    placeholder="Enter your number"
    value={Math.floor(props.temp)}/>
    </div>)
}

export default Control
