import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const LainTree = () => {
    const router = useRouter();

  return (
    <div className='alllain'>
        {/* <h4>الافلام الشائعة</h4>
        <div className='lainone' dir='rtl' id='linone'>
           
           <section onClick={()=>router.push("./film/homemovie")} className="item" >
            <div className="im"><Image width={500}  height={350}   src="/i11.jpg"  />
                <p>in 1883</p>
                <p>رومانسي 2021</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i12.jpg"  />
                <p>Andor</p>
                <p>كوميدي 2020</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i13.jpg"  />
                <p>Servence</p>
                <p>كوميدي2019</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i14.jpg"  />
                <p>The Bear</p>
                <p>رعب 2020</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i15.jpg"  />
                <p>Ozark</p>
                <p>اكشن 2008</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i16.jpg"  />
                <p>The Stranceas</p>
                <p>رومانسي 2017</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i17.jpg"  />
                <p> Bergen </p>
                <p>اكشن 2022</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i18.jpg"  />
                <p> Load Rincs</p>
                <p>اكشن 2019</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i9.jpg"  />
                <p>الحفرة</p>
                <p>دراما 2021</p>
            </div>
           </section>
           <section onClick={()=>router.push("./film/homemovie")} className="item">
            <div className="im"><Image width={500}  height={350}   src="/i20.jpg"  />
                <p> القيصر</p>
                <p>دراما 2018</p>
            </div>
           </section>


        </div> */}
    </div>
  )
}

export default LainTree