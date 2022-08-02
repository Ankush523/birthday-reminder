import React, { useState } from 'react'

const ShortCircuit = () => {
    const[text,setText] = useState('')
    const[isError,setIsError] = useState(false)
    // const firstValue = text ||  'hello world'
    // const secondValue = text && 'hello world'
  return (
    <div>
        {/* <h1>{firstValue}</h1>
        <h1>Value:{secondValue}</h1> */}
        <h1>{text || 'john'}</h1>
        <button onClick={() => setIsError(!error)}>Toggle error</button>
        {isError && <h1>Error...</h1>}
        {isError ? (<p>there is an error...</p>) : (<div><h2>No error</h2></div>)}
    </div>
  )
}

export default ShortCircuit