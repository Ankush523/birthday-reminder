import React, { useState } from 'react';
import ErrorExample from './components/1-error-example';
import UseStateBasics from './components/2-useState-basics';
import data from './data';
import List from './List';
function App() {
  return(
  <div className='container'>
    {/* <ErrorExample/> */}
    <UseStateBasics/>
  </div>
  )
}

export default App;
