import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import data from '../../../api/movie_Anami.json'


const Movie1 = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(data[11].Link);
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
            <Image  width={350}  height={600} src="/i2.jpg"  className='img'/>
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
                  <div className="taqm">
                    <h4>الطاقم</h4>
                    <div className='images'>
                    <section><Image  height={40} src="/m1.jpg" alt="" width={40}/><p >Krear ail jasim</p></section>
                    <section><Image  height={40} src="/m2.jpg" alt="" width={40}/><p>Solag  ogloa</p></section>
                    <section><Image  height={40} src="/m3.jpg" alt="" width={40}/><p>Jone Faraq</p></section>
                    <section><Image  height={40} src="/m4.jpg" alt="" width={40}/><p>Alksender</p></section>
                    <section><Image  height={40} src="/m5.jpg" alt="" width={40}/><p>Foad kasm</p></section>
                    <section><Image  height={40} src="/m6.jpg" alt="" width={40}/><p>Well smeath</p></section>
                    <section><Image  height={40} src="/m7.jpg" alt="" width={40}/><p>Nor Shareef</p></section>
                    <section><Image  height={40} src="/m88.jpg" alt="" width={40}/><p>Sara Karina </p></section>
                    </div>
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

export default Movie1