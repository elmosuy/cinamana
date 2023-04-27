import Image from 'next/image';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';
import React ,{useState,useEffect}from 'react'
import data from "../api/api_top_10"
import Link from 'next/link';

const Lain6 = () => {
   
    
        const router = useRouter();
        const [val, setval] = useState()
        useEffect(() => {
            const id = document.getElementById("val")
            setval(id.value)
            
        }, [])
        

  return (
    <div className='anami' >
       
        <h4>مجموعة افلام انمي   {val}</h4>
       

          <div className='laigroup'>
            
            <Link href="/componet/navbar-list/anami_group/anamione"><Image className='limg' width={550} height={350} src="https://e.qfilm.tv/uploads/thumbs/8fe610e22-1.jpg"/></Link>
           
            <Link href="/componet/navbar-list/anami_group/anamitoy"><Image className='limg' width={550} height={350} src="https://e.qfilm.tv/uploads/thumbs/7cfedef3d-1.jpg"/></Link>
         
            <Link href="/componet/navbar-list/anami_group/anamilion"><Image className='limg' width={550} height={350} src="https://e.qfilm.tv/uploads/thumbs/78782d9f9-1.jpg"/></Link>
           
            <Link href="/componet/navbar-list/anami_group/anamish"><Image className='limg' width={550} height={350} src="https://e.qfilm.tv/uploads/thumbs/28beb4f3d-1.jpg"/></Link>

          </div>
           
          
        
    </div>
  )
}

export default Lain6