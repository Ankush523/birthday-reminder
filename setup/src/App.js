import React, { useState } from 'react';
import ErrorExample from './useState/1-error-example';
import UseStateBasics from './useState/2-useState-basics';
import UseStateArray from './useState/3-useState-array';
import UseStateCounter from './useState/5-useState-counter';
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
