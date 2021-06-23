import React from "react";
import {Component} from "react";

export default class Videos extends Component {
    render() {
        return(
            <div className="videos-r-width mx-auto mb-5 bg-blue-dark">
                <div className="pt-4 px-3">
                    <img src={this.props.img} className="w-100" style={{borderRadius: "10px"}}/>
                </div>
                <h6 className="font-light text-left mt-2 px-3">{this.props.subject}</h6>
                <div className="w-fit mx-auto mt-5 pb-4">
                    <a href={this.props.href}>
                        <h6 className="mb-0 font-light link-btn cw px-4 py-2 cursor" style={{borderRadius: "10px"}}>رفتن به ویدئو</h6>
                    </a>
                </div>
            </div>
        )
    }
}