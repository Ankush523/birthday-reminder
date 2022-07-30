import React, { useState } from 'react'

const UseStateObject = () => {
    const [person,setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message',
    })

    const changeMessage = () => {

        //use spread operartor always when using useState in an object 
        //to obtain the values of the remaining parameters other than the parameter to be changed
        
        setPerson({...person,message:'hello world'})
    }

  return (
    <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className='btn' onClick={changeMessage}>Change Message</button>
    </div>
  )
}

export default UseStateObject