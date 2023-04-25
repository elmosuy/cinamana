import React from 'react'
import data from "../../../api/All api/api_23.json"
import { useRouter } from 'next/router'

const Item23 = () => {
    const router = useRouter()
    const { id } = router.query
  return (
    <div  className='texts'>
      <div className='text'>
        <p>
            {data[id||1].text}
        </p>
      </div>
        
        
    </div>
  )
}

export default Item23