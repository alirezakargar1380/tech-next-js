import React from "react";
import { Component } from "react";
import ArtikleItem from "../components/ArtikleItem";
import { APP_MAIN_IMG_URL } from "../pages/api/env";

export default class Article extends Component {
    render() {
        const {recomended_articles} = this.props;
        return(
            <div className="row mx-0 flex-column-reverse flex-lg-row mt-5 py-5" dir="ltr">
                <div className="col-lg-9 pr-0" id="slider" dir={"rtl"}>
                    <div className='owl-carousel' id="artikleOwl">
                        {recomended_articles.map((item) => (
                            <ArtikleItem
                                key={item.id}
                                id={item.id}
                                title={item.articles_title}
                                dis={item.description}
                                img={APP_MAIN_IMG_URL+item.articles_img}
                                url={"/artikle/"+item.articles_title}
                            />
                        ))}
                    </div>
                </div>
                <div className="col-lg-3 cb">
                    <h3 className="w-80 mx-auto pt-4 borderTop mb-4 mt-2 text-right font-blod">
                        مقالات
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
                        ما در اینحا مقالات مخلفی در رابطه با موضوعات مختلفی مینویسیم
                        مقالات علمی و اموزشی جدید را میتوانید در این بخش پیدا کنید
                        منابع این مقالات بیشتر از تحربیات علیرضا کارگر هست و یا از منابع معتبر علمی گرفته شده
                        اند
                    </h6>
                </div>
            </div>
        )
    }
}