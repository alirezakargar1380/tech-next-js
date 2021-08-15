import React from "react";
import {Component} from "react";
import Header from "../components/Header";
import $ from "jquery";
import Videos from "../components/Items/favorite_videos_item";
import { VIDEOS_MAIN_IMG_URL } from "./api/env";
import * as servise from "./api/hello";
import Head from "next/head";

class Links extends Component {

    state = {
        data: []
    }

    static async getInitialProps() {
        const recent_videos = await servise.get_recent_videos();
        console.log(recent_videos.data);
        return {
            recent_videos: "s"
        }
    }

    componentDidMount() {
        setInterval(() => {
            $("body").css("background", "#D6D6D6");
            $("#content").css("paddingTop", $("#header-place").css("height"))
        }, 100);
        $(document).ready(() => {
            this.menu("section2")
        });
        servise.get_recent_videos().then( (res) => {
            this.setState({
                data: res.data
            })
        })
    }

    menu(sec) {
        if (sec === "section1") {
            $("#section1").addClass("tabHeaderBg cw");
            $("#section2").removeClass("tabHeaderBg cw");
            $("#sec1").show();
            $("#sec2").hide();
        }
        if (sec === "section2") {
            $("#section2").toggleClass("tabHeaderBg cw");
            $("#section1").removeClass("tabHeaderBg cw");
            $("#sec2").show();
            $("#sec1").hide();
        }
    }

    render() {
        return (
            <section>
                <Head>
                    <script type="text/javascript" src="home.js"/>
                    <script type="text/javascript" src="app.js"/>
                </Head>
                <Header/>
                <section id="content" className="w-100 mt-5 position-absolute center">

                    <section className="col-lg-5 px-3 pt-5 mx-auto">
                        <div className="mx-auto w-100">
                            <h6 className="d-flex w-100">
                                <div className="font-Thin w-50 text-center tabHeader py-3 px-3 cursor"
                                     id="section1"
                                     onClick={() => this.menu("section1")}>لینک یوتیوب آخرین ویدئو ها
                                </div>
                                <div className="font-Thin w-50 text-center tabHeader py-3 px-3 cursor"
                                     id="section2"
                                     onClick={() => this.menu("section2")}>لینک های شبکه اجتماعی من
                                </div>
                            </h6>
                            <fieldset className="mt-3">
                                <section id="sec1" className="overflow-auto py-4" style={{height: "550px"}}>
                                    {this.state.data.map((data) => (
                                        <Videos
                                            img={VIDEOS_MAIN_IMG_URL+data.img_url}
                                            subject={data.subject}
                                            href={data.youtube_url}
                                        />
                                    ))}
                                </section>
                                <section id="sec2" className="overflow-auto" style={{height: "500px"}}>

                                    <div className="w-fit mx-auto pt-3 pb-5">

                                        <a
                                            className="w-100 d-flex j-c-e position-relative h-100 px-3 py-1 youtube-bg b-r-20 cursor mb-4 "
                                            href="https://www.youtube.com/channel/UCzNrEWwDGRAEalAZwF6sTRA">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                 viewBox="0 0 138.348 96.843">
                                                <g id="you" transform="translate(0 -76.801)">
                                                    <path id="Path_1" data-name="Path 1"
                                                          d="M135.456,91.923a17.324,17.324,0,0,0-12.231-12.231C112.435,76.8,69.173,76.8,69.173,76.8s-43.262,0-54.052,2.892A17.326,17.326,0,0,0,2.89,91.923C0,102.712,0,125.223,0,125.223s0,22.511,2.89,33.3a17.327,17.327,0,0,0,12.231,12.232c10.79,2.89,54.052,2.89,54.052,2.89s43.262,0,54.052-2.89a17.325,17.325,0,0,0,12.231-12.232c2.892-10.788,2.892-33.3,2.892-33.3S138.348,102.712,135.456,91.923Z"
                                                          fill="#ed1f24"/>
                                                    <path id="Path_2" data-name="Path 2"
                                                          d="M204.8,220.706l35.943-20.752L204.8,179.2v41.5Z"
                                                          transform="translate(-149.458 -74.73)" fill="#fff"/>
                                                </g>
                                            </svg>
                                            <h4 className="mb-0 pl-3 pt-2 font-Thin cw">youtube</h4>
                                        </a>

                                        <a
                                            className="w-100 d-flex j-c-e position-relative h-100 px-3 py-1 twitter-bg mx-auto b-r-20 cursor mb-4"
                                            href="https://twitter.com/alirezakargarr">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35"
                                                 height="35" viewBox="0 0 110.073 88.659" className="mt-2">
                                                <defs>
                                                    <linearGradient id="linear-gradient" x1="0.153" y1="0.039"
                                                                    x2="0.874" y2="0.934"
                                                                    gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stopColor="#2aa4f4"/>
                                                        <stop offset="1" stopColor="#007ad9"/>
                                                    </linearGradient>
                                                </defs>
                                                <path id="icons8-twitter"
                                                      d="M113.966,17.483a45.79,45.79,0,0,1-12.983,3.552,22.557,22.557,0,0,0,9.94-12.407,45.359,45.359,0,0,1-14.347,5.429,22.526,22.526,0,0,0-38.46,20.428,64.351,64.351,0,0,1-46.544-23.4A22.313,22.313,0,0,0,18.558,40.99,22.942,22.942,0,0,1,8.321,38.2v.263A22.449,22.449,0,0,0,26.428,60.412a22.471,22.471,0,0,1-5.935.8,24,24,0,0,1-4.256-.412A22.624,22.624,0,0,0,37.325,76.352a45.63,45.63,0,0,1-28.048,9.58,44.735,44.735,0,0,1-5.385-.318A64.541,64.541,0,0,0,38.517,95.659c41.532,0,64.255-34.105,64.255-63.694,0-.97-.031-1.935-.076-2.889a44.413,44.413,0,0,0,11.27-11.594"
                                                      transform="translate(-3.893 -7)" fill="url(#linear-gradient)"/>
                                            </svg>
                                            <h4 className="mb-0 pl-3 pb-1 mt-1 pt-2 font-Thin cw">Twitter</h4>
                                        </a>

                                        <a
                                            className="w-100 d-flex j-c-e position-relative h-100 px-3 py-1 mx-auto website-bg b-r-20 cursor mb-4"
                                            href="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="35"
                                                 height="35"
                                                 viewBox="0 0 74.882 64.575">
                                                <g id="internet" transform="translate(-3 -6.924)">
                                                    <path id="Path_1" data-name="Path 1"
                                                          d="M68.193,40.247A31.235,31.235,0,0,1,9.38,40"
                                                          transform="translate(1.622 9.67)" fill="none" stroke="#078cd6"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"/>
                                                    <path id="Path_2" data-name="Path 2"
                                                          d="M9.43,28.56a31.235,31.235,0,0,1,58.865.286"
                                                          transform="translate(1.637 0)" fill="none" stroke="#078cd6"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round" strokeWidth="2"/>
                                                    <path id="Path_3" data-name="Path 3"
                                                          d="M48.551,40.387C46.534,52.3,41.276,60.781,35.12,60.781s-11.479-8.6-13.47-20.641"
                                                          transform="translate(5.321 9.712)" fill="none"
                                                          stroke="#078cd6" stroke-linecap="round"
                                                          stroke-linejoin="round" strokeWidth="2"/>
                                                    <path id="Path_4" data-name="Path 4"
                                                          d="M21.6,28.823C23.539,16.59,28.862,8,35.135,8s11.518,8.668,13.5,20.823"
                                                          transform="translate(5.306 0.023)" fill="none"
                                                          stroke="#078cd6" stroke-linecap="round"
                                                          stroke-linejoin="round" strokeWidth="2"/>
                                                    <rect id="Rectangle_1" data-name="Rectangle 1" width="72.882"
                                                          height="20.823" rx="2"
                                                          transform="translate(4 28.846)" fill="none" stroke="#078cd6"
                                                          stroke-linecap="round"
                                                          stroke-linejoin="round" strokeWidth="2"/>
                                                    <path id="Path_5" data-name="Path 5"
                                                          d="M27.07,29.64l3.2,7.223,3.215-5.713L36.7,36.863l3.2-7.223"
                                                          transform="translate(6.955 6.546)" fill="none"
                                                          stroke="#078cd6" stroke-linecap="round"
                                                          stroke-linejoin="round" strokeWidth="2"/>
                                                    <path id="Path_6" data-name="Path 6"
                                                          d="M13.07,29.64l3.2,7.223,3.215-5.713L22.7,36.863l3.2-7.223"
                                                          transform="translate(2.734 6.546)" fill="none"
                                                          stroke="#078cd6" stroke-linecap="round"
                                                          stroke-linejoin="round" strokeWidth="2"/>
                                                    <path id="Path_7" data-name="Path 7"
                                                          d="M41.07,29.64l3.2,7.223,3.215-5.713L50.7,36.863l3.2-7.223"
                                                          transform="translate(11.175 6.546)" fill="none"
                                                          stroke="#078cd6"
                                                          stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"/>
                                                </g>
                                            </svg>
                                            <h4 className="mb-0 pl-3 pb-1 mt-1 pt-2 font-Thin cw">website</h4>
                                        </a>

                                        <a
                                            className="w-100 d-flex j-c-e position-relative h-100 px-3 mx-auto py-1 whatsapp-bg b-r-20 cursor mb-4"
                                            href="https://wa.me/989376489525">
                                        <span className="mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33"
                                                     viewBox="0 0 71.353 71.357">
                                                  <g id="wt" transform="translate(-986.323 -517.322)">
                                                    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(998 524)"
                                                       fill="#fff" stroke="#707070" stroke-width="1">
                                                      <ellipse cx="27" cy="29" rx="27" ry="29" stroke="none"/>
                                                      <ellipse cx="27" cy="29" rx="26.5" ry="28.5" fill="none"/>
                                                    </g>
                                                    <path id="w"
                                                          d="M62.928,12.447A35.643,35.643,0,0,0,6.834,55.435L2,73.357l18.67-4.413A35.609,35.609,0,0,0,37.7,73.282h.014A35.645,35.645,0,0,0,62.928,12.447ZM55.154,50.358c-.742,2.08-4.378,4.085-6.012,4.231s-3.165.739-10.686-2.226C29.4,48.8,23.689,39.516,23.246,38.923s-3.636-4.827-3.636-9.209a9.969,9.969,0,0,1,3.118-7.425,3.268,3.268,0,0,1,2.376-1.113c.592,0,1.188,0,1.705.021.635.025,1.338.057,2.005,1.538.792,1.763,2.522,6.165,2.744,6.611a1.644,1.644,0,0,1,.075,1.559,6.181,6.181,0,0,1-.888,1.484c-.446.521-.935,1.16-1.334,1.559-.446.442-.91.928-.392,1.816a26.788,26.788,0,0,0,4.952,6.165,24.462,24.462,0,0,0,7.161,4.421c.892.446,1.409.371,1.93-.225s2.226-2.6,2.819-3.489,1.188-.742,2.005-.446,5.195,2.451,6.083,2.9,1.484.667,1.705,1.038A7.455,7.455,0,0,1,55.154,50.358Z"
                                                          transform="translate(984.323 515.322)" fill="#0fc922"/>
                                                  </g>
                                                </svg>
                                        </span>
                                            <h4 className="mb-0 pl-3 pb-1 mt-1 pt-2 font-Thin cw">Whats app</h4>
                                        </a>

                                        <a
                                            className="w-100 d-flex j-c-e position-relative h-100 px-3 py-1 linkdin-bg mx-auto b-r-20 cursor mb-4"
                                            href="https://www.linkedin.com/in/alirezakargarr/">
                                            <span className="mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                                     viewBox="0 0 104.7 104.7">
                                                  <g id="linkdin" transform="translate(-829.65 -541.65)">
                                                    <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(835 548)"
                                                       fill="#fff" stroke="#707070" stroke-width="1">
                                                      <rect width="93" height="89" stroke="none"/>
                                                      <rect x="0.5" y="0.5" width="92" height="88" fill="none"/>
                                                    </g>
                                                    <path id="icons8-linkedin"
                                                          d="M95.106,0H9.594A9.681,9.681,0,0,0,0,9.594V95.106A9.681,9.681,0,0,0,9.594,104.7H95.106a9.681,9.681,0,0,0,9.594-9.594V9.594A9.681,9.681,0,0,0,95.106,0ZM30.537,87.25H13.087V39.262h17.45ZM21.812,33.588c-5.232,0-8.725-3.493-8.725-7.856,0-4.789,3.493-8.282,8.725-8.282s8.725,3.493,8.725,7.856C30.537,30.094,27.044,33.588,21.812,33.588Zm69.8,53.662H74.162V61.075c0-6.987-4.806-8.725-6.1-8.725-1.312,0-6.987.869-6.987,8.725V87.25H43.625V39.262h17.45v6.987c2.624-3.937,6.987-6.987,15.269-6.987s15.269,6.544,15.269,21.812Z"
                                                          transform="translate(829.65 541.65)" fill="#0077b7"/>
                                                  </g>
                                                </svg>
                                            </span>
                                            <h4 className="mb-0 pl-3 pb-1 mt-1 pt-2 font-Thin cw">Linkdin</h4>
                                        </a>

                                        <a
                                            className="w-100 d-flex mx-auto j-c-e position-relative h-100 px-3 py-1 instagram-bg b-r-20 cursor mb-4"
                                            href="https://www.instagram.com/alirezakargarr/">
                                            <svg id="instagram" className="mt-2" xmlns="http://www.w3.org/2000/svg"
                                                 width="35" height="35" viewBox="0 0 128 128">
                                                <defs>
                                                    <radialGradient id="radial-gradient" cx="0.149" cy="1.003" r="1.278"
                                                                    gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stop-color="#ffb140"/>
                                                        <stop offset="0.256" stop-color="#ff5445"/>
                                                        <stop offset="0.599" stop-color="#fc2b82"/>
                                                        <stop offset="1" stop-color="#8e40b7"/>
                                                    </radialGradient>
                                                </defs>
                                                <g id="Instagram_1_">
                                                    <rect id="Rectangle_1" data-name="Rectangle 1" width="128"
                                                          height="128" fill="none"/>
                                                    <path id="Instagram-2" data-name="Instagram"
                                                          d="M105.843,29.837a7.68,7.68,0,1,1-7.68-7.68A7.68,7.68,0,0,1,105.843,29.837ZM64,85.333A21.333,21.333,0,1,1,85.333,64,21.333,21.333,0,0,1,64,85.333Zm0-54.2A32.865,32.865,0,1,0,96.865,64,32.865,32.865,0,0,0,64,31.135Zm0-19.6c17.089,0,19.113.065,25.861.373a35.4,35.4,0,0,1,11.884,2.2A19.832,19.832,0,0,1,109.1,18.9a19.816,19.816,0,0,1,4.788,7.359,35.429,35.429,0,0,1,2.2,11.884c.308,6.749.373,8.773.373,25.862s-.065,19.113-.373,25.861a35.4,35.4,0,0,1-2.2,11.884,21.2,21.2,0,0,1-12.147,12.147,35.428,35.428,0,0,1-11.884,2.2c-6.748.308-8.772.373-25.861.373s-19.114-.065-25.862-.373a35.4,35.4,0,0,1-11.884-2.2,19.832,19.832,0,0,1-7.359-4.788,19.828,19.828,0,0,1-4.788-7.359,35.428,35.428,0,0,1-2.2-11.884C11.6,83.114,11.53,81.09,11.53,64s.065-19.113.373-25.862a35.4,35.4,0,0,1,2.2-11.884A19.832,19.832,0,0,1,18.9,18.9a19.816,19.816,0,0,1,7.359-4.788,35.428,35.428,0,0,1,11.884-2.2C44.887,11.6,46.911,11.532,64,11.532ZM64,0C46.619,0,44.439.074,37.613.385A46.975,46.975,0,0,0,22.078,3.36a31.362,31.362,0,0,0-11.336,7.382A31.362,31.362,0,0,0,3.36,22.078,46.98,46.98,0,0,0,.385,37.613C.074,44.439,0,46.619,0,64S.074,83.561.385,90.387A46.98,46.98,0,0,0,3.36,105.922a31.361,31.361,0,0,0,7.382,11.336,31.375,31.375,0,0,0,11.336,7.382,46.98,46.98,0,0,0,15.535,2.975c6.826.311,9.006.385,26.387.385s19.561-.074,26.387-.385a46.98,46.98,0,0,0,15.535-2.975,32.726,32.726,0,0,0,18.718-18.718,46.98,46.98,0,0,0,2.975-15.535c.311-6.826.385-9.006.385-26.387s-.074-19.561-.385-26.387a46.98,46.98,0,0,0-2.975-15.535,31.375,31.375,0,0,0-7.382-11.336A31.375,31.375,0,0,0,105.922,3.36,46.98,46.98,0,0,0,90.387.385C83.561.074,81.381,0,64,0Z"
                                                          fill-rule="evenodd" fill="url(#radial-gradient)"/>
                                                </g>
                                            </svg>
                                            <h4 className="mb-0 pl-3 pb-1 mt-1 pt-2 font-Thin cb">instagram</h4>
                                        </a>

                                        <a
                                            className="w-100 d-flex mx-auto j-c-e position-relative h-100 px-3 py-1 instagram-bg b-r-20 cursor"
                                            href="/youtube_downloader">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                 viewBox="0 0 138.348 96.843">
                                                <g id="you" transform="translate(0 -76.801)">
                                                    <path id="Path_1" data-name="Path 1"
                                                          d="M135.456,91.923a17.324,17.324,0,0,0-12.231-12.231C112.435,76.8,69.173,76.8,69.173,76.8s-43.262,0-54.052,2.892A17.326,17.326,0,0,0,2.89,91.923C0,102.712,0,125.223,0,125.223s0,22.511,2.89,33.3a17.327,17.327,0,0,0,12.231,12.232c10.79,2.89,54.052,2.89,54.052,2.89s43.262,0,54.052-2.89a17.325,17.325,0,0,0,12.231-12.232c2.892-10.788,2.892-33.3,2.892-33.3S138.348,102.712,135.456,91.923Z"
                                                          fill="#ed1f24"/>
                                                    <path id="Path_2" data-name="Path 2"
                                                          d="M204.8,220.706l35.943-20.752L204.8,179.2v41.5Z"
                                                          transform="translate(-149.458 -74.73)" fill="#fff"/>
                                                </g>
                                            </svg>
                                            <h6 className="mb-0 pl-3 pb-1 mt-1 pt-2 font-Thin cb">youtube downloader</h6>
                                        </a>

                                    </div>
                                </section>
                            </fieldset>
                        </div>

                    </section>

                </section>
            </section>
        )
    }
}

export default Links