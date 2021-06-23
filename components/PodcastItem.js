import React from 'react';
import { Component } from "react";

export default class PodcastItem extends Component {
    render () {
        return (
            <div className="hh Phover borderLeft" id="hh">
                <a href={"/podcasts/"+this.props.title}>
                    <div className="item">
                        <img className="mx-auto" src={this.props.img} alt=""/>
                        <div className="pTextBox" id="hoverStyle">
                            <h6 style={{height: "40px"}} className="text-right pr-4 font-blod">{this.props.title}</h6>
                            <h6 style={{height: "85px"}} className="font-light font-14 text-right pr-4 pl-4 mt-3">{this.props.dis}</h6>
                            <h6 className="hover cursor mb-0 py-2 mt-2 text-left font-medium mx-auto px-4 pb-3 d-flex more-color justify-content-between pTextBoxResponsive"
                                id="hover">
                                <div className="d-flex">
                                    <h6 className="pl-2">123</h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" width="16" height="16" viewBox="0 0 26.339 26.346">
                                        <defs>
                                            <linearGradient id="linear-gradient" x2="0.811" y2="0.783" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ef09ff"/>
                                                <stop offset="1" stopColor="#bd01ff"/>
                                            </linearGradient>
                                        </defs>
                                        <path id="chat" d="M18.445,0H7.91a7.911,7.911,0,0,0-7.9,7.9v6.146a7.912,7.912,0,0,0,7.463,7.89V25.6a.748.748,0,0,0,.748.746.739.739,0,0,0,.525-.219l.824-.824a11.375,11.375,0,0,1,8.1-3.354h.782a7.911,7.911,0,0,0,7.9-7.9V7.9A7.911,7.911,0,0,0,18.445,0ZM7.471,12.73a1.756,1.756,0,1,1,1.756-1.756A1.758,1.758,0,0,1,7.471,12.73Zm5.707,0a1.756,1.756,0,1,1,1.756-1.756A1.758,1.758,0,0,1,13.177,12.73Zm5.707,0a1.756,1.756,0,1,1,1.756-1.756A1.758,1.758,0,0,1,18.884,12.73Z" transform="translate(-0.008)" fill="url(#linear-gradient)"/>
                                    </svg>
                                </div>
                                <div className="d-flex">
                                    <h6 className="pl-2">1254</h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1"
                                         width="16" height="16" viewBox="0 0 19.499 21.666">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.132" y1="0.241" x2="0.7" y2="0.726"
                                                            gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ef09ff"/>
                                                <stop offset="1" stopColor="#b400ff"/>
                                            </linearGradient>
                                        </defs>
                                        <path id="play"
                                              d="M34.947,9.889,17.614.139A1.083,1.083,0,0,0,16,1.084v19.5a1.084,1.084,0,0,0,1.614.945l17.332-9.75a1.084,1.084,0,0,0,0-1.889Z"
                                              transform="translate(-16 0)" fill="url(#linear-gradient)"/>
                                    </svg>
                                </div>
                                <div className="d-flex">
                                    <div className="pl-2">2/000</div>
                                    <svg id="dollar-symbol" className="mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 23.464 23.464">
                                        <defs>
                                            <linearGradient id="linear-gradient" x1="0.157" y1="0.129" x2="0.743" y2="0.912" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor="#ef09ff"/>
                                                <stop offset="1" stopColor="#b400ff"/>
                                            </linearGradient>
                                        </defs>
                                        <path id="Path_11" data-name="Path 11" d="M11.732,0A11.732,11.732,0,1,0,23.464,11.732,11.732,11.732,0,0,0,11.732,0Zm.71,16.958v1.358a.363.363,0,0,1-.377.366H11.16a.369.369,0,0,1-.383-.366V17.077a7.771,7.771,0,0,1-2.31-.457.725.725,0,0,1-.445-.857l.148-.575a.726.726,0,0,1,.965-.5,5.825,5.825,0,0,0,2.086.4c.973,0,1.639-.376,1.639-1.059,0-.649-.546-1.059-1.81-1.486C9.222,11.937,7.97,11.083,7.97,9.426a3.16,3.16,0,0,1,2.882-3.04V5.148a.408.408,0,0,1,.394-.4h.905a.386.386,0,0,1,.368.4V6.266a6.742,6.742,0,0,1,1.849.308.728.728,0,0,1,.482.869l-.13.515a.724.724,0,0,1-.937.506,5.228,5.228,0,0,0-1.726-.285c-1.11,0-1.469.478-1.469.957,0,.564.6.922,2.049,1.469,2.032.717,2.848,1.657,2.848,3.193A3.272,3.272,0,0,1,12.442,16.958Z" fill="url(#linear-gradient)"/>
                                    </svg>
                                </div>
                            </h6>
                        </div>
                    </div>
                    <div className=" PcardBackground cursor" id="cardBg"></div>
                </a>
            </div>
        )
    }
}