import Head from 'next/head';
import React from "react";

export default class Campain extends React.Component {
  render() {
    return(
        <main>
          <Head>
            <link rel="stylesheet"
                  href="/assets/kampain/style/style.css"
            />
          </Head>
          <div className="con">
            <form
                className="text-center bg-white px-4 pb-4 f-18 radius-20 form-box-show"
            >
              <div className="card-image pt-3">

              </div>
              <h6 className="text-center w-100 pt-2 pb-3 font-shab mb-0">
                <b>کمپین تبلیغاتی</b>
              </h6>
              <div className="f-16 font-shab pt-2">
                <div className="d-flex" dir="rtl">
                  <div className="input-container ic2">
                    <input id="firstname" className="input input-bg text-right ml-1" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">نام</label>
                  </div>
                  <div className="input-container ic2">
                    <input id="lastname" className="input input-bg text-right mr-1" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">نام خانوادگی</label>
                  </div>

                </div>
                <div className="input-container ic2">
                  <input id="a" className="input input-bg text-right" type="text" placeholder=" "/>
                  <div className="cut2"></div>
                  <label htmlFor="a" className="placeholder2">یوزرنیم اینستاگرام</label>
                </div>
                <button type="text" className="submit">ثبت نام</button>
              </div>
              <div className="mt-5 radius-10 input-bg">
                <h6 className="font-shab text-center py-3 mb-0">
                  <b>شرایط شرکت در کمپین</b>
                </h6>
                <h6 className="font-shab text-center py-3 mb-0">
                  <b>درباره ما</b>
                </h6>
                <main className="pb-2 text-right font-shab f-14 px-3">
                  تمامی خدمات مربوط به طراحی سایت، توسط علیرضا کارگر طراحی و پیاده سازی شده است
                  <br/>
                    راه های ارتباطی با علیرضا کارگر از طریق این لینک مقدور میباشد
                </main>

                <div className=" px-3 py-2">
                  <img src="/assets/kampain/_MG_5000.jpg" className="w-100 radius-10" alt=""></img>
                </div>

              </div>
            </form>
          </div>

        </main>
    )
  }
}