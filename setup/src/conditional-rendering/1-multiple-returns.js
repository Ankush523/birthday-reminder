import React, { useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
    const [loasing,setLoading] = useState(true)
    if(loading)
    {
        return<h2>Loading...</h2>
    }
  return (
    <h2>MultipleReturns</h2>
  )
}

export default MultipleReturns