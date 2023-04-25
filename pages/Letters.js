import React, { useEffect, useState } from "react";
import data1 from "./api/All link/link_1.json";
import data2 from "./api/All link/link_2.json";
import data3 from "./api/All link/link_3.json";
import data4 from "./api/All link/link_4.json";
import data5 from "./api/All link/link_5.json";
import data6 from "./api/All link/link_6.json";
import data7 from "./api/All link/link_7.json";
import data8 from "./api/All link/link_8.json";
import data9 from "./api/All link/link_9.json";
import data10 from "./api/All link/link_10.json";
import data11 from "./api/All link/link_11.json";
import data12 from "./api/All link/link_12.json";
import data13 from "./api/All link/link_13.json";
import data14 from "./api/All link/link_14.json";
import data15 from "./api/All link/link_15.json";
import data16 from "./api/All link/link_16.json";
import data17 from "./api/All link/link_17.json";
import data18 from "./api/All link/link_18.json";
import data19 from "./api/All link/link_19.json";
import data20 from "./api/All link/link_20.json";
import data21 from "./api/All link/link_21.json";
import data22 from "./api/All link/link_22.json";
import data23 from "./api/All link/link_23.json";
import data24 from "./api/All link/link_24.json";
import data25 from "./api/All link/link_25.json";
import data27 from "./api/All link/link_27.json";
import data28 from "./api/All link/link_28.json";
import data26 from "./api/All link/link_26.json";
import { useRouter } from "next/router";
import Image from "next/image";

const Letters = ({handelBorgeremove}) => {

const router=useRouter()
  const handelNavList = () => {
    const nav = document.getElementById("navlist1");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList2 = () => {
    const nav = document.getElementById("navlist2");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList3 = () => {
    const nav = document.getElementById("navlist3");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList4 = () => {
    const nav = document.getElementById("navlist4");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList5 = () => {
    const nav = document.getElementById("navlist5");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList6 = () => {
    const nav = document.getElementById("navlist6");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList7 = () => {
    const nav = document.getElementById("navlist7");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList8 = () => {
    const nav = document.getElementById("navlist8");
    nav.classList.toggle("show-navlist");
  };  const handelNavList9= () => {
    const nav = document.getElementById("navlist9");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList10 = () => {
    const nav = document.getElementById("navlist10");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList11 = () => {
    const nav = document.getElementById("navlist11");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList12 = () => {
    const nav = document.getElementById("navlist12");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList13 = () => {
    const nav = document.getElementById("navlist13");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList14 = () => {
    const nav = document.getElementById("navlist14");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList15 = () => {
    const nav = document.getElementById("navlist15");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList16 = () => {
    const nav = document.getElementById("navlist16");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList17 = () => {
    const nav = document.getElementById("navlist17");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList18 = () => {
    const nav = document.getElementById("navlist18");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList19 = () => {
    const nav = document.getElementById("navlist19");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList20 = () => {
    const nav = document.getElementById("navlist20");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList21 = () => {
    const nav = document.getElementById("navlist21");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList22 = () => {
    const nav = document.getElementById("navlist22");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList23 = () => {
    const nav = document.getElementById("navlist23");
    nav.classList.toggle("show-navlist");
  };
  const handelNavLis24 = () => {
    const nav = document.getElementById("navlist24");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList25 = () => {
    const nav = document.getElementById("navlist25");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList26 = () => {
    const nav = document.getElementById("navlist26");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList27 = () => {
    const nav = document.getElementById("navlist27");
    nav.classList.toggle("show-navlist");
  };
  const handelNavList28 = () => {
    const nav = document.getElementById("navlist28");
    nav.classList.toggle("show-navlist");
  };



const [search, setsearch] = useState()
useEffect(() => {

var data_filter = data1.filter( element => element.link =='الأب')
console.log(data_filter);
}, [search])


  return (
    <div className="letter" id="letter">
      

      <div className="letters" id="letters">
        <div className="search-letters">
          <input
            dir="rtl"
            type="search"
            placeholder=" البحث عن تفسير ..."
            name=""
            id=""
            onChange={(e)=>setsearch(e.target.value)}
          />
          <Image src="/search.svg" alt="" width={20} height={20} />
        </div>
  
        <section className="navlist">
          <div className="letter">
            <span onClick={handelNavList}>حرف الألف</span>
            <div className="one" id="navlist1">
              {data1.map((i) => (
                <ul key={i.id}>
                   <li  onClick={() => router.push(`/components/Pages/Page_1/${i.id+1}`)}>{i.link}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="letter" >
            <span onClick={handelNavList2}>حرف الباء</span>
            <div className="letter">
              <div className="one" id="navlist2">
                {data2.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_2/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList3}>حرف التاء</span>
            <div className="letter">
              <div className="one" id="navlist3">
                {data3.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_3/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList4}>حرف الثاء</span>
            <div >
              <div className="one" id="navlist4">
                {data4.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_4/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList5}>حرف الجيم</span>
            <div className="letter">
              <div className="one" id="navlist5">
                {data5.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_5/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList6}>حرف الحاء</span>
            <div className="letter">
              <div className="one" id="navlist6">
                {data6.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_6/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList7}>حرف الخاء</span>
            <div className="letter">
              <div className="one" id="navlist7">
                {data7.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_7/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList8}>حرف الدال</span>
            <div className="letter">
              <div className="one" id="navlist8">
                {data8.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_8/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList9}>حرف الذال</span>
            <div className="letter">
              <div className="one" id="navlist9">
                {data9.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_9/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList10}>حرف الراء</span>
            <div className="letter">
              <div className="one" id="navlist10">
                {data10.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_10/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList11}>حرف الزاي</span>
            <div className="letter">
              <div className="one" id="navlist11">
                {data11.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_11/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList12}>حرف السين</span>
            <div className="letter">
              <div className="one" id="navlist12">
                {data12.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_12/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList13}>حرف الشين</span>
            <div className="letter">
              <div className="one" id="navlist13">
                {data13.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_13/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList14}>حرف الصاد</span>
            <div className="letter">
              <div className="one" id="navlist14">
                {data14.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_14/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList15}>حرف الضاد</span>
            <div className="letter">
              <div className="one" id="navlist15">
                {data15.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_15/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList16}>حرف الطاء</span>
            <div className="letter">
              <div className="one" id="navlist16">
                {data16.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_16/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList17}>حرف الظاء</span>
            <div className="letter">
              <div className="one" id="navlist17">
                {data17.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_17/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList18}>حرف العين</span>
            <div className="letter">
              <div className="one" id="navlist18">
                {data18.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_18/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList19}>حرف الغين</span>
            <div className="letter">
              <div className="one" id="navlist19">
                {data19.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_19/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList20}>حرف الفاء</span>
            <div className="letter">
              <div className="one" id="navlist20">
                {data20.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_20/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList21}>حرف القاف</span>
            <div className="letter">
              <div className="one" id="navlist21">
                {data21.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_21/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList22}>حرف الكاف</span>
            <div className="letter">
              <div className="one" id="navlist22">
                {data22.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_22/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList23}>حرف اللام</span>
            <div className="letter">
              <div className="one" id="navlist23">
                {data23.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_23/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavLis24}>حرف الميم</span>
            <div className="letter">
              <div className="one" id="navlist24">
                {data24.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_24/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList25}>حرف النون</span>
            <div className="letter">
              <div className="one" id="navlist25">
                {data25.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_25/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList26}>حرف الهاء</span>
            <div className="letter">
              <div className="one" id="navlist26">
                {data26.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_26/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList27}>حرف الواو</span>
            <div className="letter">
              <div className="one" id="navlist27">
                {data27.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_27/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="letter">
            <span onClick={handelNavList28}>حرف الياء</span>
            <div className="letter">
              <div className="one" id="navlist28">
                {data28.map((i) => (
                  <ul key={i.id}>
                    <li onClick={() => router.push(`/components/Pages/Page_28/${i.id}`)}>{i.link}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Letters;
