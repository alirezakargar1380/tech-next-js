import React from 'react';
import { Component } from "react";
import MoreBtn from "../components/MoreBtn";

export default class PodcastIntro extends Component {
    render() {
        // const {}
        return (
            <section className="my-5 py-5 o-0" id="s5">
                    <div className="d-flex justify-content-center">
                        <h4 className="mr-3 font-blod">پادکست</h4>
                        <img className="mt-1" width="24" height="24" src="/img/icon/Group 4.png" alt=""/>
                    </div>
                    <div className="row mx-auto d-flex justify-content-center mt-5">
                    <div className="col-lg-5 text-center">
                        <img id="ppppppp" className="w-90 radius-35px dsf" src="/img/inside_china.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7 text-left pt-3 pl-4">
                        <div className="w-50-md-80 m-lg-r-center px-0 ml-5">
                            <h5 className="font-blod mt-3 text-right" dir="rtl">عشق چه زمانی میتونه مخرب باشه!</h5>
                            <h6 className="font-light font-14 mt-4 text-right">
                                عموما ما تو فرهنگمون، اون راحتی که باید باشه رو نداریم که بتونیم یک سری مسائل رو با افرادی که بتونن کمکمون کننن در میون بذاریم
                                <br/>
                                نمونه این تغییرات که همه مون داشتیم توی زندگیمون عاشق شدن توی سن کمه که تقریبا همه مون دچارش شدیم!
                                توی این پادکست به این موضوع پرداختیم
                            </h6>
                        </div>
                        <div className="w-100">
                            <MoreBtn href={"/"} first={"بیشتر"} class="text-left pl-3 mt-5" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}