import router from 'next/router'
import React from "react";
import {
    get_app_posts_by_title, app_downloader,
    token_validation, payment_request,
    payment_verification
} from "../api/hello";
import seen from "../api/controller/seen";
import Head from 'next/head';
import Header from "../../components/Header";
import {APP_MAIN_IMG_URL} from "../api/env";
import Propety from "../../components/Propety";
import $ from "jquery";
import Login from "../login";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_status: false
        }
    }

    static async getInitialProps({query}) {
        const app_detail = await get_app_posts_by_title(encodeURI(query.id));
        return {
            data: app_detail.data
        }
    }

    componentDidMount() {
        const {Status, login_status, Authority} = router.query;
        if (Status === "OK") {
            payment_verification({
                "authority": Authority
            }).then(() => {
                alert("خرید شما موفقیت آمیز بود")
            })
            // alert(Authority);
        }
        if (login_status === "ok") {
            alert("شما با موفقیت وارد حساب کاربری خود شدید، حالا باید برنامه مورد نظر را خریداری کنید تا بتوانید از آن استفاده کنید")
        }
        $(document).ready(() => {
            var s = this.props.data.post_detail.description;
            var htmlObject = $(s);
            $("#dis").append(htmlObject);
            if (this.props.data.post_detail.app_pay_status === "free") {
                $("#buy").hide();
                $("#price").removeClass("d-flex").hide();
            }
        });

        // set login status
        const user_data = sessionStorage.getItem("user_data");
        if (user_data) {
            token_validation(JSON.parse(user_data).token)
                .then(() => {
                    this.setState({
                        login_status: true,
                    })
                })
                .catch((e) => {
                    this.setState({
                        login_status: false,
                    })
                    console.log(`you are not login -> ${e.response.data.message}`)
                })
        }
        if (!user_data) {
            this.setState({
                login_status: false,
            })
        }
        seen("apps",this.props.data.post_detail.id)
    }

    async app_downloader() {
        const {id} = router.query;
        const app_detail = await get_app_posts_by_title(encodeURI(id));
        const {post_detail} = app_detail.data;
        if (post_detail.app_pay_status === "pay") {
            if (this.state.login_status === false) {
                // if user not login
                this.setState({
                    needLogin: true
                });
            }
            if (this.state.login_status === true) {
                // check if user has permision access to download this file
                this.download(post_detail,"pay");
            }
        } else {
            // product id + type + user token
            this.download(post_detail,"free");
        }
        // check if user was login continue and set needLogin true
        // else move user to login page
        // controller.
    }

    download(data, app_status) {
        const user_data = sessionStorage.getItem("user_data");
        var body = {
            "product_id": parseInt(data.id),
            "product_type": "apps"
        }
        if (app_status === "free") {
        }
        if (app_status === "pay") {
            var header = {
                headers: {
                    "token": JSON.parse(user_data).token
                }
            }
        }
        app_downloader(data.file_name, body, header)
            .then( response => {
                window.open(response.data);
            })
            .catch((e) => {
                const {message} = e.response.data;
                alert(message);
            })
    }

    send_payment_request(post_id) {
        if (this.state.login_status === false)
        {
            // if user not login
            this.setState({
                needLogin: true
            });
        }
        if (this.state.login_status === true)
        {
            const user_data = sessionStorage.getItem("user_data");
            var body = {
                "product_id": parseInt(post_id),
                "product_type": "apps"
            }
            payment_request(body, JSON.parse(user_data).token)
                .then( response => {
                    window.location = response.data;
                })
        }
    }

    render() {
        if (this.state.needLogin === true) return <Login
            redirect={window.location.href}
            message={"برای دانلود این نرم افزار شما ابتدا باید لاگین کرده و سپس این نرم افزار را خریداری کنید"}
        />
        const { data } = this.props;
        return (
            <section>
                <Head>
                    <title>{data.page_seo.title}</title>
                    <meta name="description" content={data.page_seo.description}/>
                    <meta name="keywords" content={data.page_seo.keywords}/>
                    <meta name="author" content={data.page_seo.author}/>
                    <link rel="icon" href="/a.png"/>
                    <link rel="stylesheet" href="/assets/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css" />
                    <script type="text/javascript" src="/assets/jquery.js"></script>
                    <script type="text/javascript" src="/assets/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
                    <script type="text/javascript" src="/assets/app.js"></script>
                </Head>
                <div id="main" className="position-relative" style={{background: "#000"}}>
                    <Header/>
                    <main
                        style={{backgroundColor: "#0D0D0D"}}
                        className="col-md-6 px-0 mx-auto pt-5 text-center"
                        id="main-content">
                        <div>
                            <img className="w-100" src={APP_MAIN_IMG_URL+data.post_detail.main_img} alt=""/>
                        </div>
                        <div className="">
                            <section className="w-100">
                                <header className="pt-3">
                                    <h5 className="mb-0 my-4 w-80 mx-auto apps-sub-c font-medium">{data.post_detail.title}</h5>
                                    <div
                                        id="price"
                                        className="d-flex justify-content-center cw font-light">
                                        <span className="mr-2">{data.post_detail.price+" T"}</span>
                                        <span>:قیمت</span>
                                    </div>
                                    <div
                                        id="buy"
                                        className="bg-blue mt-4 font-light cw py-2 cursor"
                                        onClick={() => {
                                            this.send_payment_request(data.post_detail.id)
                                        }}>خرید
                                    </div>
                                    <h5 className="font-light mb-0 cw pt-4">
                                        مشخصات
                                        <img className="ml-2" src="/img/icon/Polygon 2.png" alt=""/>
                                    </h5>
                                </header>
                                <section className="font-14">
                                    {data.post_options.map((result) => (
                                        <Propety
                                            key={result.id}
                                            subject={result.detail_title}
                                            detail={result.detail_description}
                                        />
                                    ))}
                                </section>
                                <section className="pb-5 mt-4">
                                    <h5 className="font-light mb-0 cw pt-5 pb-3">
                                        درباره برنامه
                                        <img className="ml-2" src="/img/icon/Polygon 2.png" alt=""/>
                                    </h5>
                                    <h6 className="mb-0 font-light mx-auto w-80 cw" id="dis"></h6>
                                </section>
                                <section className="pb-5">
                                    <h5 className="font-light mb-0 cw pt-5 pb-3">
                                        لیست دانلود
                                        <img className="ml-2" src="/img/icon/Polygon 2.png" alt=""/>
                                    </h5>
                                    <div className="w-fit mx-auto sssss pb-5" onClick={() => {
                                        this.app_downloader()
                                    }}>
                                        <div className="download-btn cursor w-100 px-3 pb-1 h-fit d-flex">
                                        <span className="d-grid">
                                            <svg className="ssvf" xmlns="http://www.w3.org/2000/svg" width="23"
                                                 height="17" viewBox="0 0 59.79 93.977">
                                              <path id="top"
                                                    d="M61.88,93.12h0a3,3,0,0,0,.44.36l.24.13a1.74,1.74,0,0,0,.59.24l.25.07h0a3,3,0,0,0,1.16,0l.26-.08.3-.09a3,3,0,0,0,.3-.16l.21-.12a3,3,0,0,0,.46-.38L93,66.21A3,3,0,1,0,88.79,62L67,83.76V3a3,3,0,1,0-6,0V83.76L39.21,62A3,3,0,0,0,35,66.21Z"
                                                    transform="translate(-34.368)" fill="#fff"/>
                                            </svg>
                                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="23" height="8"
                                                 viewBox="0 0 128 40">
                                              <path id="btn"
                                                    d="M125,88a3,3,0,0,0-3,3v22a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V91a3,3,0,0,0-6,0v22a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V91A3,3,0,0,0,125,88Z"
                                                    transform="translate(0 -88)" fill="#fff"/>
                                            </svg>
                                        </span>
                                            <h5 className="pl-3 pt-2 mb-0 font-Thin cw">download</h5>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </main>
                </div>
            </section>
        )

    }
}

export default About;