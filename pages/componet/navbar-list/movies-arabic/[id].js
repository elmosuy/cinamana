import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../../api/movie_Arabic.json";
import dat from "../../../api/api_Arabic.json";
import coments from "../../../api/comments_api.json";


import Lain4 from "../../lain4";

const Movie = () => {
  
  const router = useRouter();
  const { id } = router.query;
  const [cont, setcont] = useState(1346)

  useEffect(() => {
    localStorage.setItem("view", id);
  }, [id]);


  
  var data_filter = dat.filter((element) => element.id == id);

  return (
    <div className="vid">
      <iframe
        src={data[id || 1].Link}
        frameborder="0"
        allowFullScreen
        controls="true"
        width={600}
        height={600}
      ></iframe>

      <div className="imgvideo" dir="rtl">
        <div className="likeing">
          <section>
            <p >23</p> <Image width={20} height={20} src="/like.svg" />
          </section>
          <section>
            <p>{cont}</p>
            <Image width={20} height={20} src="/like.svg" />
          </section>
          
        </div>
        <div>
          <div >
            {data_filter.map((el) => (
              <div className="fullhome">
              <div className="descrption">
                <section >
                  <img src={`${el.Image}`} className="descrptionimg" width={500}  />
                </section>
                <section>
                  {" "}
                  <div className="headmovie">
                    <h3> {el.title}</h3>
                    <h4>Sniper Redemption</h4>
                  </div>
                  <div className="taqeam">
                    <p> IMDb</p>
                    <p>7.6</p>
                  </div>
                  <div className="alfeen">
                    <p>جريمة</p>
                    <p>دراما</p>
                    <p>اثارة</p>
                  </div>
                  <div className="time">
                    <p>1 ساعة 45 دقائق </p>
                  </div>
                  <div>
                    <p>
                      ينطلق عميل سابق بالقوات الخاصة في رحلة عبر عالم الجريمة من
                      أجل إنقاذ ابنه الوحيد
                    </p>
                  </div>
                </section>
              </div>
              <div className="comments">
                {
                  coments.map((el)=>(
                    <div className="comment">
                    <section><div><img src={`${el.Image}`} alt=""  /> <h4>{el.Name}</h4></div><div><p>{el.date}</p></div></section>
                    <hr />
                    <section>
                        <p>{el.title}</p>
                        
                      </section>
                </div>
                  ))
                }
                <input type="text" name="" id="" placeholder="ضع تعليقا مناسبا" />
                
                </div>
                
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lainvid">
        <h2>افلام قد تود مشاهدتها</h2>
        <Lain4 />
      </div>
    </div>
  );
};

export default Movie;
