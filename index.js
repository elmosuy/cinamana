import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import LainOne from './componet/lainone';
import LainTow from './componet/laintow';
import Lain4 from './componet/lain4';
import Lain5 from './componet/lain5';
import LainTree from './componet/laintree';
import Link from 'next/link';
import Lain6 from './componet/lain6';
import Lain7 from './componet/lain7';


export default function Home() {

  const router = useRouter();

 
    // executes forever

  // const [inc,setinc]=useRecoilState(atomm)

  const [img,setimg]=useState(1)



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

     

        <div className="background" style={{ backgroundImage: `url(/cinamana/movie${img}.jpg) `}}>       
          <div className='leftright'> <img src="/cinamana/rightt.svg" alt="" width={30} className='right' onClick={handelnextmovie}/><img src="/cinamana/rightt.svg" alt="" width={30} className='left' onClick={handelprevmovie} />  
            </div> 
               <div dir='rtl' className='shahd1'>
                <Link href="/componet/navbar-list/1119"><p>شاهد الان</p></Link>
               </div>
       </div>
      <div className='moviest'>
            <div className='mov' dir='rtl'>
            <section onClick={()=>setimg(1)} style={{ backgroundImage: `url(/cinamana/movie1.jpg)`}}></section>
            <section onClick={()=>setimg(2)} style={{ backgroundImage: `url(/cinamana/movie2.jpg)`}}></section>
            <section onClick={()=>setimg(3)} style={{ backgroundImage: `url(/cinamana/movie3.jpg)`}}></section>
            <section onClick={()=>setimg(4)} style={{ backgroundImage: `url(/cinamana/movie4.jpg)`}}></section>
            <section onClick={()=>setimg(5)} style={{ backgroundImage: `url(/cinamana/movie5.jpg)`}}></section>
            <section onClick={()=>setimg(6)} style={{ backgroundImage: `url(/cinamana/movie6.jpg)`}}></section>
            
        </div>
      </div>


        <LainOne />
        <LainTow/>
        <LainTree/>
        <Lain4/>
        <Lain5/>
        <Lain6/>
        <Lain7/>
       

    </div>
  )




}