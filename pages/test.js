import React from 'react'

const test = () => { 
     function changeBackground(e) {
        e.target.style.background = 'red';
      }
      function changeBackgr(e) {
        e.target.style.background = 'none';
      }
  return (
  
    
      
        <div className="App">
            <h1>aaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaa</h1>
            <h1>aaaaaaaaaaaaaa</h1>
          <button onMouseEnter={changeBackground} onMouseOut={changeBackgr}>Hover over me!</button>
          <button >Hover over me!</button>

        </div>
   
  )
}

export default test