import Header from "../../components/Header";
import Head from 'next/head';
import React from "react";
import {pages_seo} from "./../api/hello";
import $ from "jquery";

class Links extends React.Component{
    static async getInitialProps() {
        const page_seo = await pages_seo("podcast","0");
        return {
            page: page_seo.data
        }
    }

    componentDidMount() {
        $(document).ready(() => {
            var h = $("#header").css("height")
            $("#main-box")
                .css("paddingTop",h).css("background", "black")
        })
    }

    render() {
        return(
            <section style={{background: "black"}}>
                <Header/>
                <Head>
                    <title>{this.props.page.title}</title>
                    <meta name="description" content={this.props.page.description}/>
                    <meta name="keywords" content={this.props.page.keywords}/>
                    <meta name="author" content={this.props.page.author}/>
                    <link rel="icon" href="/a.png"/>
                    <link rel="stylesheet" href="/assets/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css" />
                    <script type="text/javascript" src="/assets/jquery.js"></script>
                    <script type="text/javascript" src="/assets/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
                    <script type="text/javascript" src="/assets/app.js"></script>
                </Head>
                <main className="col-md-5 mx-auto" id="main-box">
                    <div className="w-80 mx-auto">
                        <img src="/img/inside_china.jpg" alt="podcast" className="w-100 radius-35px"/>
                        <h5 className="text-center cw font-15 font-blod pt-3">
                            <div className="d-flex justify-content-center">
                                <span className="position-absolute w-100">
                                    ...کی درست میگه کی غلط
                                    {/*<img className="ml-2 rotatetion360" style={{width: "20px"}} src="/img/icon/Polygon 2.png" alt=""/>*/}
                                </span>
                                <div className="w-75 mt-2 pt-1 pb-3" style={{background: "#131313"}}></div>
                            </div>
                        </h5>
                        <div className="mt-4 text-center">
                            <h6 className="font-light mb-0 cw pt-4">
                                جزئیات
                                <img className="ml-2 rotatetion360" style={{width: "15px"}} src="/img/icon/Polygon 2.png" alt=""/>
                            </h6>
                        </div>
                        <div className="mt-4">
                            <span className="d-flex justify-content-center mt-2" dir="rtl">
                                <div
                                    className="w-40 font-14 text-center cw py-1 font-medium"
                                    style={{background: "#212121"}}>زمان</div>
                                <div className="w-60 cw font-14 text-center font-Thin pt-1">10:10:00</div>
                            </span>
                            <span className="d-flex justify-content-center mt-2" dir="rtl">
                                <div
                                    className="w-40 font-14 text-center cw py-1 font-medium"
                                    style={{background: "#212121"}}>صدا پیشه</div>
                                <div className="w-60 cw font-14 text-center font-Thin pt-1">علیرضا کارگر</div>
                            </span>
                        </div>
                        <div className="mt-5 text-center">
                            <h6 className="font-light mb-0 cw pt-4">
                                توضیحات
                                <img className="ml-2 rotatetion360" style={{width: "15px"}} src="/img/icon/Polygon 2.png" alt=""/>
                            </h6>
                        </div>
                    </div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                    <div className="cw">hello world</div>
                </main>
            </section>
        )
    }

}

export default Links