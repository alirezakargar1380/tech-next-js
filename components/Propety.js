import React from "react";
import { Component } from "react";

export default class propety extends Component {
    render() {
        return(
            <div className="w-90 mx-auto font-medium mt-3">
                <fieldset className="d-flex col-md-10 mx-auto justify-content-between" dir="rtl">
                    <h6 className="text-center mb-0 py-2 w-40 ml-2 propety-title-bg cw">{this.props.subject}</h6>
                    <div className="text-center py-2 w-60 mr-2 propety-bg">{this.props.detail}</div>
                </fieldset>
            </div>
        )
    }
}