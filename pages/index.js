import Head from 'next/head'
import {pages_seo,get_recommend_posts_by_types} from "./api/hello.js";
import React from 'react';
import Header from "../components/Header";
import FieldOfActivity from "../layout/FieldOfActivity";
import PodcastIntro from "../layout/PodcastIntro";
import Podcast from "../layout/Podcast";
import Apps from "../layout/Apps";
import Article from "../layout/Article";

export default class Home extends React.Component {

    static async getInitialProps() {
        const data = await pages_seo("home",0);
        const apps = await get_recommend_posts_by_types("apps");
        const podcasts = await get_recommend_posts_by_types("podcasts");
        const articles = await get_recommend_posts_by_types("articles");
        // console.log(podcasts.data[0]);
        return {
            page: data.data[0],
            podcasts: podcasts.data,
            apps: apps.data,
            articles: articles.data
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>{this.props.page.title}</title>
                    <meta name="description" content={this.props.page.description}/>
                    <meta name="keywords" content={this.props.page.keywords}/>
                    <meta name="author" content={this.props.page.author}/>
                    <link rel="icon" href="/a.png"/>
                    <link rel="stylesheet" href="/assets/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css" />
                    <script type="text/javascript" src="/assets/jquery.js"></script>
                    <script type="text/javascript" src="/assets/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
                    <script type="text/javascript" src="/assets/home.js"></script>
                    <script type="text/javascript" src="/assets/app.js"></script>
                </Head>
                <main>
                    <div id="main" style={{background: "#D6D6D6"}}>
                        <Header/>
                        <section id="s1" className="position-relative">
                            <div className="overflow-hidden" id="playpen">
                                <section
                                    className="d-block favorite-width center mx-auto position-absolute d-contents text-center"
                                    id="columnsBox">
                                    {/*<div className="w-100 header-bg blur-bg">*/}
                                    {/*    ssd*/}
                                    {/*</div>*/}
                                    <div className="card-columns favorite-column-c">
                                        <div className="d-none d-lg-block w-fit card border-0 mx-auto mb-4 pt-3">
                                            <div id="f-element"
                                                 className="cw f-shadow f-element w-fit mx-auto f-bg podcast-radius text-center d-flex">
                                                <h6 className="pt-3 w-100 clb pb-4 pl-4 pr-3 font-blod">پادکست ها</h6>
                                                <div className="py-3 pr-3"><img className="w-100" src="/img/world-wide-web.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-none d-lg-block w-fit card border-0 mx-auto mb-4 pt-3">
                                            <div id="f-element"
                                                 className="cw f-shadow f-element w-fit mx-auto  f-bg podcast-radius text-center d-flex">
                                                <h6 className="pt-3 w-100 clb pb-4 pl-4 pr-3 font-blod">پادکست ها</h6>
                                                <div className="py-3 pr-3"><img className="w-100" src="/img/world-wide-web.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-none d-lg-block card border-0 w-fit mx-auto mb-4 pt-3">
                                            <div id="f-element"
                                                 className="cw f-shadow f-element w-fit mx-auto f-bg podcast-radius text-center d-flex">
                                                <h6 className="pt-3 w-100 clb pb-4 pl-4 pr-3 font-blod">پادکست ها</h6>
                                                <div className="py-3 pr-3"><img className="w-100" src="/img/world-wide-web.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 w-fit mx-auto mb-4 pt-3">
                                            <div id="f-element"
                                                 className="cw f-shadow f-element w-fit mx-auto  f-bg podcast-radius text-center d-flex">
                                                <h6 className="pt-3 w-100 clb pb-4 pl-4 pr-3 font-blod">پادکست ها</h6>
                                                <div className="py-3 pr-3"><img className="w-100" src="/img/world-wide-web.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 w-fit mx-auto mb-4 pt-3">
                                            <div id="f-element"
                                                 className="cw f-shadow f-element w-fit mx-auto  f-bg podcast-radius text-center d-flex">
                                                <h6 className="pt-3 w-100 clb pb-4 pl-4 pr-3 font-blod">پادکست ها</h6>
                                                <div className="py-3 pr-3"><img className="w-100" src="/img/world-wide-web.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 w-fit mx-auto mb-4 pt-3">
                                            <div id="f-element"
                                                 className="cw f-shadow f-element w-fit mx-auto  f-bg podcast-radius text-center d-flex">
                                                <h6 className="pt-3 w-100 clb pb-4 pl-4 pr-3 font-blod">پادکست ها</h6>
                                                <div className="py-3 pr-3"><img className="w-100" src="/img/world-wide-web.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div id="element" className="w-100 d-contents"
                                 style={{position: "absolute", zIndex: "-1", top: "0", bottom: "0"}}>
                                <img id="bg" src="/img/Web-Background.jpg"
                                     style={{width: "100%", objectFit: "cover", height: "-webkit-fill-available"}}
                                     alt=""/>
                            </div>
                        </section>
                        <section id="s2">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                            <div className="line4"></div>
                            <div className="line5"></div>
                            <div className="line6"></div>
                            <div className="line7"></div>
                            <FieldOfActivity
                                posts={
                                    [
                                        {
                                            id: 1,
                                            title: "پادکست ها",
                                            img: <svg viewBox="0 0 24 24" className="w-70-50 svgPodcast" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="2"/>
                                                <path d="M14,17.58a1,1,0,0,1-.92-.6,1,1,0,0,1,.52-1.32,4,4,0,1,0-3.2,0,1,1,0,1,1-.8,1.83,6,6,0,1,1,4.8,0A1,1,0,0,1,14,17.58Z"
                                                      fill="#000"/>
                                                <path d="M14,21.77a1,1,0,0,1-.22-2,8,8,0,1,0-3.56,0A1,1,0,0,1,11,21a1,1,0,0,1-1.2.75A10,10,0,1,1,22,12a9.93,9.93,0,0,1-7.78,9.74A.83.83,0,0,1,14,21.77Z"
                                                      fill="#000"/>
                                            </svg>
                                            ,
                                            dis: "پادکست های ما کلا در رابطه با چالش های برنامه نویسی\n" +
                                                "و حول محور دنیای برنامه نویسی در موضوعات مختلف\n" +
                                                "ساخته شده و منتشر میگردد"
                                        },
                                        {
                                            id: 2,
                                            title: "مقالات آموزشی",
                                            img: <svg id="_x31__x2C_5" className="w-70-50" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
                                                      xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="m12.25 12c-.414 0-.75-.336-.75-.75v-.75h-7v.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75h8.5c.414 0 .75.336.75.75v1.5c0 .414-.336.75-.75.75z"/>
                                                </g>
                                                <g>
                                                    <path d="m8 18.75c-.414 0-.75-.336-.75-.75v-8c0-.414.336-.75.75-.75s.75.336.75.75v8c0 .414-.336.75-.75.75z"/>
                                                </g>
                                                <g>
                                                    <path d="m9.25 19h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
                                                </g>
                                                <g>
                                                    <path d="m20.25 10.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
                                                </g>
                                                <g>
                                                    <path d="m20.25 14.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
                                                </g>
                                                <g>
                                                    <path d="m20.25 18.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
                                                </g>
                                                <g>
                                                    <path d="m21.25 23h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-20.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25z"/>
                                                </g>
                                                <g>
                                                    <path d="m23.25 6h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
                                                </g>
                                            </svg>
                                            ,
                                            dis: "اگر دنبال طریقه نوشتن برنامه های مختلف هستید،\n" +
                                                "و یا دوست دارید مباحث و چالش های خود را در حوزه برنامه نویسی\n" +
                                                "حل کنید، این قسمت میتواند برای شما کاربردی باشد",
                                        },
                                        {
                                            id: 3,
                                            title: "اپلیکیشن ها",
                                            img: <svg viewBox="0 0 32 32" className="w-70-50" xmlns="http://www.w3.org/2000/svg">
                                                <g data-name="59-phone" id="_59-phone-2">
                                                    <path className="cls-1" d="M25,10V3a2,2,0,0,0-2-2H9A2,2,0,0,0,7,3V29a2,2,0,0,0,2,2h4"/>
                                                    <path className="cls-1" d="M20,1V3a2,2,0,0,1-2,2H14a2,2,0,0,1-2-2V1"/>
                                                    <circle className="cls-1" cx="22" cy="22" r="6"/>
                                                    <line className="cls-1" x1="22" x2="22" y1="16" y2="13"/>
                                                    <line className="cls-1" x1="22" x2="22" y1="31" y2="28"/>
                                                    <line className="cls-1" x1="28" x2="31" y1="22" y2="22"/>
                                                    <line className="cls-1" x1="13" x2="16" y1="22" y2="22"/>
                                                    <line className="cls-1" x1="26.24" x2="28.36" y1="26.24" y2="28.36"/>
                                                    <line className="cls-1" x1="15.64" x2="17.76" y1="15.64" y2="17.76"/>
                                                    <line className="cls-1" x1="26.24" x2="28.36" y1="17.76" y2="15.64"/>
                                                    <line className="cls-1" x1="15.64" x2="17.76" y1="28.36" y2="26.24"/>
                                                    <circle className="cls-1" cx="22" cy="22" r="2"/>
                                                </g>
                                            </svg>
                                            ,
                                            dis: "اپلیکیشن های این وبسایت اکثرا توسط خودمون توسعه داده شدن\n" +
                                                "و همچنین این اپلیکیشن ها در زمینه های (web, mobile) توسعه داده\n" +
                                                "و در اختیار شما قرار میگیرد",
                                        },
                                    ]
                                }
                            />
                            <PodcastIntro

                            />
                            <Podcast
                                recomended_podcasts={this.props.podcasts}
                            />
                            <Apps
                                recomended_apps={this.props.apps}
                            />
                            <Article
                                recomended_articles={this.props.articles}
                            />
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
