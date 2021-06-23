import React from "react";
import { Component } from "react";
import AppsItems from "../components/AppsItems";

export default class Apps extends Component {

    render() {
        const {recomended_apps} = this.props;
        return(
            <div className="row mx-0 flex-column-reverse flex-lg-row" dir="ltr">
                <div className="col-lg-9 pr-0" id="slider">
                    <div className='owl-carousel' id="AppsOwl">
                        {recomended_apps.map(item => {
                            return (
                                <AppsItems
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    dis={item.summary.substring(0, 200)+"..."}
                                    img={item.card_img}
                                    href={"apps/"+item.title}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-3 cb">
                    <h3 className="w-80 mx-auto pt-4 borderTop mb-4 mt-2 text-right font-blod">
                        برنامه ها
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                             viewBox="0 0 35 30">
                            <g id="Polygon_2" data-name="Polygon 2" fill="none">
                                <path d="M17.5,0,35,30H0Z" stroke="none"/>
                                <path
                                    d="M 17.5 9.923171997070313 L 8.705183029174805 25 L 26.2948169708252 25 L 17.5 9.923171997070313 M 17.5 0 L 35 30 L 0 30 L 17.5 0 Z"
                                    stroke="none" fill="#00ae9d"/>
                            </g>
                        </svg>
                    </h3>
                    <h6 className="w-80 mx-auto text-right font-blod pb-5">
                        در این بخش نرم افزار های مختلفی رو با شما به اشتراک میگذاریم،
                        این نرم افزار ها ممکن است توسط تیم خودمون توسعه داده باشه یا صرفا به شما پیشنهاد داده شده باشه
                    </h6>
                </div>
            </div>
        )
    }
}