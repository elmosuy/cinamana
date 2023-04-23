import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import LainOne from './componet/lainone';
import LainTow from './componet/laintow';
import LainTree from './componet/laintree';


export default function Home() {

  const router = useRouter();

 
    // executes forever

  // const [inc,setinc]=useRecoilState(atomm)

  const [img,setimg]=useState(1)



console.log(img);
const handelnextmovie=()=>{
 if(img>=6){
    setimg(1)
   }else{
    setimg(img+1)
   }}


   const handelprevmovie=()=>{
    if(img>1){
       setimg(img-1)
      }else{
       setimg(6)
      }}


  return (
    <div  className='index'>
      <Head>
        <title>الصفحة الرئيسية</title>
      
      </Head>

     

         <div className="background" style={{ backgroundImage: `url(/movie${img}.jpg) `}}>       
          <div className='leftright'> <img src="rightt.svg" alt="" width={30} className='right' onClick={handelnextmovie}/><img src="rightt.svg" alt="" width={30} className='left' onClick={handelprevmovie} />  
            </div> 
               <section dir='rtl' className='shahd'>
                <h4 onClick={()=>router.push("./film/homemovie")}>شاهد الان</h4>
                <h4>اضف الى القائمة</h4>
                <h4>مشاهدة العرض التشويقي</h4>
              </section>
       </div>
      <div className='moviest'>
            <div className='mov' dir='rtl'>
            <section onClick={()=>setimg(1)} style={{ backgroundImage: `url(/movie1.jpg)`}}></section>
            <section onClick={()=>setimg(2)} style={{ backgroundImage: `url(/movie2.jpg)`}}></section>
            <section onClick={()=>setimg(3)} style={{ backgroundImage: `url(/movie3.jpg)`}}></section>
            <section onClick={()=>setimg(4)} style={{ backgroundImage: `url(/movie4.jpg)`}}></section>
            <section onClick={()=>setimg(5)} style={{ backgroundImage: `url(/movie5.jpg)`}}></section>
            <section onClick={()=>setimg(6)} style={{ backgroundImage: `url(/movie6.jpg)`}}></section>
            
        </div>
      </div>


        <LainOne />
        <LainTow/>
        <LainTree/>
       
       

        

    </div>
  )




}
