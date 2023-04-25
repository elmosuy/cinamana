import Image from 'next/image'
import React from 'react'

const Person = () => {
  return (
    <div className='series'>
        <Image width={400} className='dontfound' height={400} src="/cinamana/singin.svg" ></Image>
        <h2>
            يرجى تسجيل الدخول لحفظ البيانات
        </h2>
    </div>
  )
}

export default Person