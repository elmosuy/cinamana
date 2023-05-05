import React, { useEffect } from 'react'

const Loading = () => {

    useEffect(() => {
   const loading=  document.getElementById("loading")
   setTimeout(()=>{
    loading.style.display="none";
   }, 4000)
    })
    
  return (
    <div className='loading' id='loading'>
        
        <div class="loader"><h2>M</h2>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className="spinner">
    <circle stroke="url(#gradient)" r="20" cy="33" cx="33" stroke-width="1" fill="transparent" class="path"></circle>
      <linearGradient id="gradient">
        <stop stop-opacity="1" stop-color="#fe0000" offset="0%"></stop>
        <stop stop-opacity="0" stop-color="#af3dff" offset="100%"></stop>
      </linearGradient>
    
  </svg> 
</div>
<div class="loader loader2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className="spinner spinner2">
    <circle stroke="url(#gradient)" r="20" cy="33" cx="33" stroke-width="1" fill="transparent" class="path"></circle>
      <linearGradient id="gradient">
        <stop stop-opacity="1" stop-color="#fe0000" offset="0%"></stop>
        <stop stop-opacity="0" stop-color="#af3dff" offset="100%"></stop>
      </linearGradient>
    
  </svg> <h2 className='nth2'>
        n
    </h2>
</div>
<div>
    
</div>
<p>  &copy; Moon 2023 Powered by Elmosuy  </p>

    </div>
  )
}

export default Loading
