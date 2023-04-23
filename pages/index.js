import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';



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

     

    
        

    </div>
  )




}
