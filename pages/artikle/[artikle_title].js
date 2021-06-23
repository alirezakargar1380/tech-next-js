import React from 'react';
import { Component } from "react";
import Header from "../../components/Header";
import $ from "jquery";
import {get_article_posts_by_title} from "../api/hello";
import {APP_MAIN_IMG_URL} from "../api/env";
import Head from "next/head";
import seen from "../api/controller/seen";

export default class ArticklePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            once: true,
            data: []
        }
    }

    static async getInitialProps({query}) {
        const post_detail = await get_article_posts_by_title(encodeURI(query.artikle_title));
        return {
            data: post_detail.data
        }
    }

    componentDidMount() {
        const { data } = this.props;
        $(document).ready(() => {
            const { data } = this.props;
            var s = data.post_detail.article_text;
            var htmlObject = $(s);
            $("#dis").append(htmlObject)
        });
        // seen("articles", 3)
        seen("articles",data.post_detail.id)
    }

    render() {
        const { data } = this.props;
        return(
            <div className="content-page-bg">
                <Head>
                    <title>{data.page_seo.title}</title>
                    <meta name="description" content={data.page_seo.description}/>
                    <meta name="keywords" content={data.page_seo.keywords}/>
                    <meta name="author" content={data.page_seo.author}/>
                    <link rel="icon" href="/a.png"/>
                    <script type="text/javascript" src="/assets/jquery.js"></script>
                    <script type="text/javascript" src="/assets/app.js"/>
                </Head>
                <main>
                    <Header />
                </main>
                <section className="col-lg-5 mx-auto px-0 cw" id="main-content">
                    <section>
                        <img
                            id="main-image"
                            // style={{height: "100%"}}
                            className="w-100 h-100 mt-5 cover-object object-position-top"
                            src={APP_MAIN_IMG_URL+data.post_detail.articles_img}
                            alt=""
                        />
                        <div className="h-100 position-relative">
                            <div className="w-100 position-absolute">
                            </div>
                            <div className="position-absolute w-100 d-grid mt-auto"
                                 style={{zIndex: "2", bottom: 0}}>
                                <section className="h-fit mt-auto text-right">
                                    <div className="d-block d-lg-none">
                                        <div className="mr-2 py-1 mb-2 cw w-fit px-4 ml-auto font-14 font-medium artikle-color">تکنولوژی</div>
                                        <div className="mx-2 text-right mb-2 ">
                                            <h6 className="w-fit ml-auto px-4 py-2 font-medium blur-bg header-bg">{data.post_detail.articles_title}</h6>
                                        </div>
                                    </div>
                                    <div className="w-100 d-none d-lg-block">
                                        <section
                                            className="d-flex justify-content-center cw pb-2 font-medium bg-black-gradiant">
                                            <h4 className="w-fit bg-blue px-4 mx-2 py-1">
                                                کد نویسی
                                                <span className="pl-1">#</span>
                                            </h4>
                                            <h4 className="w-fit bg-blue px-4 mx-2 py-1">
                                                تکنولوژی
                                                <span className="pl-1">#</span>
                                            </h4>
                                            <h4 className="w-fit bg-blue px-4 mx-2 py-1">
                                                بررسی
                                                <span className="pl-1">#</span>
                                            </h4>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                    <article className="px-3">
                        <header className="font-light bold-border-bottom d-flex justify-content-between py-3">
                            <h5 className="mb-0 pl-3">9:51:08</h5>
                            <div className="d-flex justify-content-between">
                                <h6 className="pr-3">توسط {data.articles_writer}</h6>
                                <span className="little-border mb-2" />
                                <h6 className="d-flex mb-0 pl-3" dir="rtl">
                                    <span className="pl-2">21</span>
                                    <span className="pl-2">مرداد</span>
                                    <span className="">1399</span>
                                </h6>
                            </div>
                        </header>
                        <article>
                            <h4 className="mb-0 font-medium text-right pt-3  d-none d-lg-block" style={{color: "#ff7539"}}>{data.articles_title}</h4>
                            <div id="dis" className="font-Thin mb-0 text-right reading_text pt-4">
                                {/*<div className="p-3 b-r-8 code-npm text-left">*/}
                                {/*    const nodemailer = require('nodemailer');*/}
                                {/*</div>*/}
                            </div>
                        </article>

                    </article>
                </section>
            </div>
        )
    }
}