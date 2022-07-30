import React, { useState } from 'react';
import ErrorExample from './components/1-error-example';
import UseStateBasics from './components/2-useState-basics';
import UseStateArray from './components/3-useState-array';
import UseStateCounter from './components/5-useState-counter';
import data from './data';
import List from './List';
function App() {
  return(
  <div className='container'>
    {/* <ErrorExample/> */}
    {/* <UseStateBasics/> */}
    {/* <UseStateArray/> */}
    <UseStateCounter/>
  </div>
  )
}

export default App;
