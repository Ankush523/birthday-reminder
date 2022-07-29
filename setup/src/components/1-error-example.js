import React from 'react';

const ErrorExample = () => {

    const title = 'random title'
    const handleClick = () => {
        title = 'hello world'
        console.log(title)
    }
    return(
        <div>
            <h2>{title}</h2>
            <button className='btn' onClick={handleClick}>Change Title</button>
        </div>
    )
}

export default ErrorExample