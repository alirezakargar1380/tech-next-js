import React from "react";

export default class MoreBtn extends React.Component {
    render() {
        return(
            <h6 className={this.props.class +" more-color mb-0 more-activity-btn cursor font-blod d-flex moreBtn"}>
                <a className="more-color" href={this.props.href}>
                    {this.props.first}
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10.124 17.232">
                        <g id="Group_1" data-name="Group 1" transform="translate(0)">
                            <path id="Path_1" data-name="Path 1"
                                  d="M101.753,7.944,109.421.275a.945.945,0,0,1,1.333,0l.565.565a.944.944,0,0,1,0,1.333L104.88,8.613l6.447,6.447a.945.945,0,0,1,0,1.333l-.565.564a.945.945,0,0,1-1.333,0l-7.676-7.675a.951.951,0,0,1,0-1.338Z"
                                  transform="translate(-101.478)" fill="#ff2c2c" stroke="6"/>
                        </g>
                    </svg>
                    {this.props.last}
                </a>
            </h6>
        )
    }
}
