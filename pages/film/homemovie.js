import React from 'react'
import LainTow from '../componet/laintow'

const homemovie = () => {
  return (
    <div className='vid'>
      <head>
        <title>Watch</title>
        <link rel="shortcut icon" href="/mana.ico" />
        </head>
      <video src="/video.mp4" controls />
      <div className='imgvideo' dir='rtl'>
        <div className='likeing' >
          <section>
          <p>25.7k</p> <img src="/like.svg" alt=""width={20} /></section>
          <section>
            <p>358</p>
            <img src="/like.svg" alt="" width={20}/>
            
           </section>
        </div>
   <div>
    <span className='descrption'>
          <section> 
            <img src="/i2.jpg" alt="" className='img'/>
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
                    <section><img src="/m1.jpg" alt="" width={40}/><p>Krear ail jasim</p></section>
                    <section><img src="/m2.jpg" alt="" width={40}/><p>Solag  ogloa</p></section>
                    <section><img src="/m3.jpg" alt="" width={40}/><p>Jone Faraq</p></section>
                    <section><img src="/m4.jpg" alt="" width={40}/><p>Alksender</p></section>
                    <section><img src="/m5.jpg" alt="" width={40}/><p>Foad kasm</p></section>
                    <section><img src="/m6.jpg" alt="" width={40}/><p>Well smeath</p></section>
                    <section><img src="/m7.jpg" alt="" width={40}/><p>Nor Shareef</p></section>
                    <section><img src="/m88.jpg" alt="" width={40}/><p>Sara Karina </p></section>
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
      <LainTow />
    </div>
  )
}

export default homemovie