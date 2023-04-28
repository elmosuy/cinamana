import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import data from '../../../api/movie_all_asia.json'


const Movie2 = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='vid'>
    
    <iframe src={data[id||1].Link} frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={600} height={600} controls='true' ></iframe>
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

export default Movie2