import React from 'react';
import ActivitySliderItem from "../components/ActivitySliderItem";

export default class FieldOfActivity extends React.Component {
    render() {
        const {posts} = this.props;
        return(
            <div className="w-100 mt-5" style={{/*display: "-webkit-inline-box"*/}} id="s4">
                <div className="row mx-0 flex-column-reverse flex-lg-row" dir="ltr">
                    <div className="col-lg-9 pr-0 o-0" id="slider" dir={"rtl"}>
                        <div className='owl-carousel h-100' id="carsoual">
                            {posts.map((item) => (
                                <ActivitySliderItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    dis={item.dis}
                                    img={item.img}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 black-bg o-0" id="dis-activity-box">
                        <h2 className="mt-5 mb-4 mt-2 cw text-center font-light">
                            محتوای وبسایت
                            <svg className="pl-2" xmlns="http://www.w3.org/2000/svg" width="30" height="25"
                                 viewBox="0 0 35 30">
                                <g id="Polygon_2" data-name="Polygon 2" fill="none">
                                    <path d="M17.5,0,35,30H0Z" stroke="none"/>
                                    <path
                                        d="M 17.5 9.923171997070313 L 8.705183029174805 25 L 26.2948169708252 25 L 17.5 9.923171997070313 M 17.5 0 L 35 30 L 0 30 L 17.5 0 Z"
                                        stroke="none" fill="#00ae9d"/>
                                </g>
                            </svg>
                        </h2>
                        <div className="w-75 mx-auto cw font-14 text-right font-light pb-5">
                            تمام دسته بندی محتوا هایی که در این وبسایت  منتشر میشود در اینجا قرار دارد، شما میتوانید دسته بندی های مختلف محتوای وبسایت ما رو ببنید و با کلیک بر روی گزینه بیشتر همه آنها را مشاهده کنید
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
