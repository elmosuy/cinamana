import Image from 'next/image';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';
import React ,{useState,useEffect}from 'react'

const LainOne = () => {
   
        //  const handelScroll=()=>{
           
        //   const lin=document.getElementById("linone")
        //       lin.style.left="700px"
             
          
        //  }
    
        const router = useRouter();
        const [val, setval] = useState()
        useEffect(() => {
         const id = document.getElementById("val")
         setval(id.value)
         console.log( Number("1"));
        }, [])
        

  return (
    <div className='alllain'>
       
        {/* <h4>الافلام الحصرية {val}</h4>
        <div className='lainone' dir='rtl' id='linone'>
           
           <section onClick={()=>router.push("./film/homemovie")} className="item" >
            <div className='im'><Image  width={500}  height={350} src="/i1.jpg"  />
                <p>An Unexpect Chrestmas</p>
                <p id='val'>رومانسي 2021</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im" ><Image  src="/i2.jpg" 
             className='imgs'            
             width={500}
             height={350} 
            />
                <p>ِِA Timeless</p>
                <p>كوميدي 2020</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im" ><Image  width={500}  height={350} src="/i3.jpg"  />
                <p>تسليم الاهالي</p>
                <p>كوميدي2019</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image  width={500}  height={350} src="/i4.jpg"  />
                <p id="val">عربة الاسرار</p>
                <p>رعب 2020</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image  width={500}  height={350} src="/i5.jpg"  />
                <p>الجزيرة</p>
                <p>اكشن 2008</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image  width={500}  height={350} src="/i6.jpg"  />
                <p>جنيبال</p>
                <p>رومانسي 2017</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image  width={500}  height={350} src="/i7.jpg"  />
                <p>جريمة في انقرة</p>
                <p>اكشن 2022</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image  width={500}  height={350} src="/i8.jpg"  />
                <p>قيامة عثمان</p>
                <p>اكشن 2019</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image  width={500}  height={350} src="/i9.jpg"  />
                <p>القضاء</p>
                <p>دراما 2021</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image  width={500}  height={350} src="/i10.jpg"  />
                <p>التفاح الحرام</p>
                <p>دراما 2018</p>
            </div>
           </section>


        </div> */}
    </div>
  )
}

export default LainOne