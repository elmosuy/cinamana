import React, { useEffect } from 'react'

const About = () => {
    
  
      
 
    
 

  return (
    <div className='about'>
        <div  className='company'>
            <h2 dir='rtl' >
                  شركة Elmosuy
            </h2>
            <p>
                    نحن شركة مختصة بالبرمجيات وتطويرها والعمل على المشاريع بكفائة عالية وبشكل متطور هدفنا تطوير المواقع والبرامج العربية لتصل الى مراحل ذات مستوة عالي 
            </p>
        </div>
        <div class="timeline">
    <ul>
      <li id='anim1'>
        <div class="timeline-content" >
          <h3 class="date" >20th may, 2021</h3>
          <h1>website cinema </h1>
          <p dir='rtl'>موقع مختص بالافلام السينمائية مجانا كليا غير ربحي فيه العديد من الصفحات كل صفحة مختلفة عن باقي الصفحات بالمحتوى ف منها عربي وغربي استخدمت احدث التقنيات لجعله مناسب للكل</p>
        </div>
      </li>
      <li  id='anim2'>
        <div class="timeline-content animtion" >
          <h3 class="date">5th Apr, 2023</h3>
          <h1>website Dream</h1>
          <p>موقع عربي لتفسير الاحلام مجانا وغير ربحي ذات طابع مميز لانه فيه العديد من المميزات ف منها خفيف وسريع بدون اعلانات مزعجة فيه اكثر من اقسام عديدة دينية يعمل على جميع الاجهزة الصغيرة والكبيرة </p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim3'>
          <h3 class="date">13th may, 2022</h3>
          <h1>App Scraping</h1>
          <p>تطبيق يمكن سحب اي بيانات من المواقع الالكترونية ليستفاد منه طلاب علوم الحاسبات في تحليل البيانات </p>
        </div>
        <span>
        skills
        </span>
      </li>
      <li>
        <div class="timeline-content" id='anim4'>
          <h1>React js</h1>
          <p></p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim3'>
          <h1> Next Js</h1>
          <p></p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim4'>
          <h1>Node Js</h1>
          <p></p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim3'>
          <h1>Express</h1>
          <p></p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim4'>
          <h1>MongoDB</h1>
          <p></p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim3'>
          <h1>My SQL</h1>
          <p></p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim4'>
          <h1>Web Scraping</h1>
          <p></p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim3'>
          <h1>TypeScript</h1>
          <p> </p>
        </div>
      </li>
      <li>
        <div class="timeline-content" id='anim4'>
          <h1>Jwt</h1>
          <p></p>
        </div>
      </li>
    </ul>
  </div>

    </div>
  )
}

export default About