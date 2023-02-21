import { useRouter } from 'next/router';
import React from 'react'

const LainOne = () => {
   
        //  const handelScroll=()=>{
           
        //   const lin=document.getElementById("linone")
        //       lin.style.left="700px"
             
          
        //  }
    
        const router = useRouter();
   
    

  return (
    <div className='alllain'>
        <h4>الافلام الحصرية</h4>
        <div className='lainone' dir='rtl' id='linone'>
           
           <section onClick={()=>router.push("./film/homemovie")} className="item" >
            <div><img  src="/i1.jpg"  />
                <p>An Unexpect Chrestmas</p>
                <p>رومانسي 2021</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i2.jpg"  />
                <p>ِِA Timeless</p>
                <p>كوميدي 2020</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i3.jpg"  />
                <p>تسليم الاهالي</p>
                <p>كوميدي2019</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i4.jpg"  />
                <p>عربة الاسرار</p>
                <p>رعب 2020</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i5.jpg"  />
                <p>الجزيرة</p>
                <p>اكشن 2008</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i6.jpg"  />
                <p>جنيبال</p>
                <p>رومانسي 2017</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i7.jpg"  />
                <p>جريمة في انقرة</p>
                <p>اكشن 2022</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i8.jpg"  />
                <p>قيامة عثمان</p>
                <p>اكشن 2019</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i9.jpg"  />
                <p>القضاء</p>
                <p>دراما 2021</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div><img  src="/i10.jpg"  />
                <p>التفاح الحرام</p>
                <p>دراما 2018</p>
            </div>
           </section>


        </div>
    </div>
  )
}

export default LainOne