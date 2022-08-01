import React, { useState } from 'react'

const ShortCircuit = () => {
    const[text,setText] = useState('')
    const firstValue = text ||  'hello world'
    const secondValue = text && 'hello world'
  return (
    <div>
        {/* <h1>{firstValue}</h1>
        <h1>Value:{secondValue}</h1> */}
        <h1>{text || 'john'}</h1>
        {text && <h1>hello world</h1>}
    </div>
  )
}

export default ShortCircuit