import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users';

const UseEffectSecondArgument = () => {
    const [users,setUsers] = useState([])

    const getusers = async() => {
         const response = await fetch(url);
         const users = await response.json();
         console.log(users);
    }
    useEffect(() => {
        getusers()
    },[])
  return (
    <div>
        <h3>Github users</h3>
        <ul>
        {users.map((user) => {
            const{id,login,avatar_url,html_url} = user
            return <li key={id}>
                <img src={avatar_url} a={login}/>
                <div>
                    <h4>{login}</h4>
                    <a href={html_url}>Profile</a>
                </div>
            </li>
        })}
        </ul>
    </div>
  )
}

export default UseEffectSecondArgument