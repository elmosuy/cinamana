import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import data from '../../api/movie_hollywood.json'
import data2 from '../../api/api_hollywood.json'


const Movie = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(data[71].Link);
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
            {/* <Image  width={350}  height={600} src={data2[id+1].Image}  className='img'/> */}
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
 
    </div>
  )
}

export default Movie