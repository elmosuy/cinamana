import Image from 'next/image'
import React from 'react'

const Shere = () => {
  return (
    <div className='texts shere' dir='rtl' >
        <div className='n1'>
            <h2>جاري العمل على هذه الصفحة</h2>
        </div>
        <div className='n2'>
        <Image src='/searc.svg' width={500}  height={500}/>
        </div>
    </div>
  )
}

export default Shere