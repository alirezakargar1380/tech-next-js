import React from "react";
import MoreBtn from "../components/MoreBtn";
import {APP_MAIN_IMG_URL} from "../pages/api/env";

export default class AppsItems extends React.Component {
    render() {
        return (
            <div className="hh owlElement">
                <div className="item borderLeft">
                    <header className="font-blod text-right pr-4 py-2">#{this.props.id}</header>
                    <div className="rrr w-100 fillColor">
                        <img className="px-4" src={APP_MAIN_IMG_URL+this.props.img} alt="samsung app"/>
                    </div>
                    <div className="textBoxC">
                        <h6 className="text-right mt-4 px-4 font-blod">{this.props.title}</h6>
                        <h6 className="font-light font-14 text-right pr-4 pl-4 mt-5">{this.props.dis}</h6>
                        <MoreBtn
                            href={this.props.href}
                            class="justify-content-end pl-4 pb-3 mt-4"
                            last={"بیشتر"}
                        />
                    </div>
                    <div className="cardBackground cursor" id="cardBg"></div>
                </div>
            </div>
        )
    }
}
