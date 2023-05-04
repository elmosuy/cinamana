import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import datas from "../../../api/api_Arabic.json"
import Link from 'next/link';

const Movies = () => {
  const router = useRouter();   
  const[range,setrange]=useState("2023")
  const rangetype = () => {
    const rangeType = document.getElementById("rangeType");
    rangeType.classList.toggle("show-range");
  };
// const [post, setpost] = useState([])
//  const scroll=()=>{
//     setTimeout(()=>{
//       setpost(datas)
//      }, 6000)}
//   useEffect(() => {

//       scroll()

//   })
  

// scroll()
const [select, setselect] = useState("عربي")

const filteredDaa = datas.filter((el) => {return el.type.includes(select)})
   
  console.log(select);
useEffect(() => {
  if(filteredDaa.length==80){
  document.getElementById("more-move").style.display="flex"
}else if(filteredDaa.length>=160){
  document.getElementById("more-move").style.display="flex"

}else {
  document.getElementById("more-move").style.display="none"

}
})



const [n, setn] = useState(70)
const loop=()=>{
setn(n+70)

}


  return (
    <div  className='moves-en'>
      <Head>
        <title>
          افلام
        </title>
      </Head>

      <div className='serch-movies' dir='rtl'>
        <div className='section1'>
          <ul>
            <li >افلام</li>
<Link href="/componet/series"><li>مسلسلات</li></Link>
             <select  name="انواع" id="" onChange={(e)=>{setselect(e.target.value)}}>
            <option value="عربي">الكل</option>
              <option value="كوميدي">كوميدي</option>
              <option value="دراما">دراما</option>
              <option value="رومانسي">رومانسي</option>
              <option value="اثارة">مثير</option>
              <option value="اكشن">اكشن</option>
              <option value="حرب">حروب</option>
              <option value="حياة الغرب">حياة الغرب</option>
              <option value="خيال">خيال</option>
              <option value="سيرة ذاتية">سيرة ذاتية</option>
              <option value="عائلي">عائلي</option>
              <option value="غموض">غموض</option>
              <option value="مدبلج">مدبلج بالعربي</option>
              <option value="نفسي">نفسي</option>
            </select>

            <li onClick={rangetype}>
              <span>سنة 2023-1900</span>
                <div  className='rang-type' id='rangeType'>
                  <div>
                    <h3>  2023-{range}</h3>
                  </div>
                <div className='range'>
                   <span>1900</span>
               <input type="range" id="volume"  name="volume"  min="1900" max="2023" onChange={(e)=>setrange(e.target.value)} />
                 <span>2023</span>

               </div>
              </div>
         </li>
           
          </ul>
        </div>
        <div>
          <p>صنف حسب الملفات الحديثة</p>
        </div>
      </div>
      <div className='apis-en'>
    
   { filteredDaa.slice(0,n).map((i)=>(
      <section  key={i.id} className='a-en'>
          <div className={i.id}>
            <div className='img-film-en' onClick={()=>router.push(`./${i.id}`)}>
           <p>{i.IMDb}</p>
            <Image  width={300} height={200}   src={i.Image} className='image'></Image>
            <img src="/plays.svg" className='img'  alt="" />
            </div>
          <p>{i.title}</p>
          <p className='type-movie'> {i.type} </p>




          </div>
      </section>
   ))}
</div>  <div className='more-movie' id='more-move'> <h3 onClick={loop}>شاهد المزيد</h3></div> 

    </div>
  )
}

export default Movies