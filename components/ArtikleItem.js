import React from "react";
import MoreBtn from "./MoreBtn";

class ArtikleItem extends React.Component {
    render() {
        return (
            <div className="hh owlElement">
                <div className="item borderLeft">
                    <header className="font-blod text-right pr-4 py-3">#{this.props.id}</header>
                    <div className="rrr w-100">
                        <img src={this.props.img} className="w-100 px-4"/>
                    </div>
                    <div className="textBoxC">
                        <h6 className="text-right mt-4 pl-3 pr-4 font-blod">{this.props.title}</h6>
                        <h6 className="font-light text-right pr-4 font-14 pl-4 mt-3">{this.props.dis}</h6>
                        <MoreBtn
                            href={this.props.href}
                            class="justify-content-end pl-4 pb-3 mt-4"
                            last={"بیشتر"}
                        />
                        {/*<a href={this.props.url}>*/}
                        {/*    <h6 className="more-activity-btn cursor py-2 mt-5 text-left font-blod pl-5 pb-3 d-flex justify-content-end more-color moreBtn">*/}
                        {/*        <svg className="ml-2 pt-1" xmlns="http://www.w3.org/2000/svg" width="6.124" height="12.232" viewBox="0 0 10.124 17.232">*/}
                        {/*            <g id="Group_1" data-name="Group 1" transform="translate(0)">*/}
                        {/*                <path id="Path_1" data-name="Path 1"*/}
                        {/*                      d="M101.753,7.944,109.421.275a.945.945,0,0,1,1.333,0l.565.565a.944.944,0,0,1,0,1.333L104.88,8.613l6.447,6.447a.945.945,0,0,1,0,1.333l-.565.564a.945.945,0,0,1-1.333,0l-7.676-7.675a.951.951,0,0,1,0-1.338Z"*/}
                        {/*                      transform="translate(-101.478)" fill="#ff2c2c" stroke="6"/>*/}
                        {/*            </g>*/}
                        {/*        </svg>*/}
                        {/*        بیشتر*/}
                        {/*    </h6>*/}
                        {/*</a>*/}
                    </div>
                    <div className="cardBackground cursor" id="cardBg"></div>
                </div>
            </div>
        )
    }
}

export default ArtikleItem;