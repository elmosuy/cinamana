import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import datas from "../../../api/api_Arabic.json"
import data from "../../../api/api_Arabic2.json"

const Moviese = () => {
  const router = useRouter();   
  const[range,setrange]=useState("2023")
  const rangetype = () => {
    const rangeType = document.getElementById("rangeType");
    rangeType.classList.toggle("show-range");
  };
const [post, setpost] = useState([])

  useEffect(() => {
    setTimeout(()=>{
      setpost(datas)
     }, 10000)
  

 
  })
  



 


  return (
    <div  className='moves-en'>
      <Head>
        <title>
          افلام عربية
        </title>
      </Head>

      <div className='serch-movies' dir='rtl'>
        <div className='section1'>
          <ul>
            <li >افلام</li>
            <li>مسلسلات</li>
            <li>الانواع</li>
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
    
   { data.map((i)=>(
      <section  key={i.id} className='a-en'>
          <div className={i.id}>
            <div className='img-film-en' onClick={()=>router.push(`./${i.id}`)}>
           <p>{i.IMDb}</p>
            <Image  width={300} height={200}   src={i.Image}></Image>
           
            </div>
          <p>{i.title}</p>
          <p className='type-movie'>كوميدي 2022, دراما</p>




          </div>
      </section>
   ))}
   { post.map((i)=>(
      <section  key={i.id} className='a-en'>
          <div className={i.id}>
            <div className='img-film-en' onClick={()=>router.push(`./${i.id}`)}>
           <p>{i.IMDb}</p>
            <Image  width={300} height={200}   src={i.Image}></Image>
           
            </div>
          <p>{i.title}</p>
          <p className='type-movie'>كوميدي 2022, دراما</p>




          </div>
      </section>
   ))}
</div>
    </div>
  )
}

export default Moviese