import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {

    const [value,setValue] = useState(0)
    useEffect(() => {
        console.log('call useEffect')
        if(value>=1)
        {
            document.title = `New Messages (${value})`
        }
    })
  return (
    <div>
        <h1>Value</h1>
        <button onClick={() => setValue(value+1)}>Click me</button>
    </div>
  )
}

export default UseEffectBasics