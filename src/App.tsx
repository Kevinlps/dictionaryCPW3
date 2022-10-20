import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div className="App">
     <form>
  <label>
    Digite uma palavra 
    <input type="text" name="name" required />
  </label>
  <input type="submit" value="Submit" />
</form>
 
    </div>
  )
}

export default App
