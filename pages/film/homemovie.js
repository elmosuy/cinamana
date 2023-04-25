import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import LainTow from '../componet/laintow'

const homemovie = () => {
  return (
    <div className='vid'>
    
      <video src="/video.mp4" controls />
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
     <ul>
      <li>اضافة الى القائمة</li>
      <li>اضف الى المفضلة</li>
      <li>ابلاغ عن مشكلة</li>
      <li>قد ترغب ايضا بمشاهدة</li>
      </ul></div></div>
    </div>
  )
}

export default homemovie