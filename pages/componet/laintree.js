import Image from 'next/image';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';
import React ,{useState,useEffect}from 'react'
import data from "../api/api_nice.json"

const LainOne = () => {
   
    
        const router = useRouter();
        const [val, setval] = useState()
        useEffect(() => {
            const id = document.getElementById("val")
            setval(id.value)
            
        }, [])
        

  return (
    <div className='alllain'>
       
        <h4> الافلام المميزة</h4>
        <div className='lainone' dir='rtl' id='linone'>
           {
            data.map((el)=>(
              <section key={el.id} onClick={()=>router.push(`/componet/navbar-list/${el.id}`)} className="item" >
              <div className='im'><Image  width={500}  height={350} src={el.Image}  />
                  <p>{el.title}</p>
                  <p id='val'>رومانسي 2021</p>
              </div>
             </section>
            ))
           }
           
          
        </div>
    </div>
  )
}

export default LainOne
