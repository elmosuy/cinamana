import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import data from '../../api/movie_hollywood.json'
import Laintree from "../laintree"


const Movie = () => {
  const router = useRouter()
  const { id } = router.query
  const [num, setnum] = useState()
  useEffect(() => {
   setnum(id+1)
  }, [])
  
   console.log(id-1);
  return (
    <div className='vid'>
    
    <iframe src={data[id||1].Link} frameborder="0" allowFullScreen controls='true'  width={600} height={600}></iframe>
      <div className='imgvideo' dir='rtl'>
        <div className='likeing' >
          <section>
          <p>25.7k</p> <Image  width={20}  height={20} src="/like.svg"   /></section>
          <section>
            <p>358</p>
            <Image  width={20}  height={20} src="/like.svg"   />
            
           </section>
        </div>
   <div>
    <span className='descrption'>
          <section> 
            </section>
            <section > <div className="headmovie">
                <h3> Transfusion </h3>
                <h4>Sniper Redemption</h4></div>
                <div className="taqeam">
                 <p> IMDb</p><p>7.6</p>
                </div>
                  <div className="alfeen">
                  <p>جريمة</p>
                  <p>دراما</p>
                  <p>اثارة</p>
                  </div>
                  <div className="time">
                    <p>1 ساعة 45 دقائق </p>
                  </div>
                  <div>
                    <p>ينطلق عميل سابق بالقوات الخاصة في رحلة عبر عالم الجريمة من أجل إنقاذ ابنه الوحيد</p>
                  </div>
                  
               
            </section>
    
     </span>
     
    </div></div>
    <div className='lainvid'>
      <h2>
        افلام قد تود مشاهدتها
      </h2>
    <Laintree/>

    </div>
 
    </div>
  )
}

export default Movie