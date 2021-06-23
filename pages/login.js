import React from "react";
import {Component} from "react";
import Header from "../components/Header";
import Head from 'next/head';
import $ from "jquery";
import {user_login,user_sign} from "./api/hello";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            sabt: false,
        }
    }
    componentDidMount() {
        if (this.props.message) alert(this.props.message)
        $("body").css("background", "#D6D6D6");
    }

    login_req() {
        const body = {
            "username": this.state.username,
            "password": this.state.password
        }
        user_login(body)
            .then((result) => {
                const userData = result.data;
                sessionStorage.setItem("user_data", JSON.stringify(userData));
                // if login was sucssful set a sossion and redirect user
                window.location = this.props.redirect + "?login_status=ok"
            })
            .catch((e) => {
                alert("your username or password is wrong")
            })
        // alert(this.state.username+" "+this.state.password);
    }

    sighup_req()
    {
        const body = {
            "username": this.state.username,
            "password": this.state.password,
            "phone": this.state.phone,
            "email": this.state.email,
        }
        user_sign(body)
            .then((response) => {
                console.log(response);
                this.login_req();
            })
            .catch((e) => {
                const { message } = e.response.data;
                alert(message)
            })
    }

    render() {
        if (this.state.sabt === true) {
            return (
                <section>
                    <Head>
                        <script type="text/javascript" src="/assets/app.js"/>
                    </Head>
                    <Header/>
                    <section className="position-absolute center col-sm-6">
                        <fieldset className="login-form-bg w-fit font-15 mx-auto font-light">
                            <div className="mb-0 w-fit p-4">
                                <input className="w-100 mb-2 py-1 login-input text-right pr-1"
                                       id="user"
                                       onChange={ e => {
                                           this.setState({
                                               username: e.target.value
                                           })
                                       }}
                                       placeholder="نام کاربری"/>
                                <br/>
                                <input
                                    className="w-100 mb-3 py-1 login-input text-right pr-1"
                                    id="pass"
                                    onChange={e => {
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }}
                                    placeholder="پسورد"/>
                                <br/>
                                <input
                                    className="w-100 mb-3 py-1 login-input text-right pr-1"
                                    onChange={e => {
                                        this.setState({
                                            phone: e.target.value
                                        })
                                    }}
                                    placeholder="شماره موبایل"/>
                                <br/>
                                <input
                                    className="w-100 mb-3 py-1 login-input text-right pr-1"
                                    onChange={e => {
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }}
                                    placeholder="ایمیل"/>
                                <div className="mb-4 w-fit font-14 d-flex justify-content-center">
                                <span className="pr-1 cursor" style={{color: "blue"}}
                                      onClick={() => {
                                          this.setState({
                                              sabt: false
                                          })
                                      }}
                                >لاگین بشید</span>
                                    <span>حساب کاربری دارید؟</span>
                                </div>
                                <button className="w-100 login-btn py-1 cw" onClick={
                                    () => { this.sighup_req() }
                                }>ثبت نام</button>
                            </div>
                        </fieldset>
                    </section>
                </section>
            )
        }
        return(
            <section>
                <Header/>
                <Head>
                    <script type="text/javascript" src="/assets/app.js"/>
                </Head>
                <section className="position-absolute center col-sm-6">
                    <fieldset className="login-form-bg w-fit font-15 mx-auto font-light">
                        <div className="mb-0 w-fit p-4">
                            <input className="w-100 mb-2 py-1 login-input text-right pr-1"
                                   id="user"
                                   onChange={e => {
                                       this.setState({
                                           username: e.target.value
                                       })
                                   }}
                                   placeholder="نام کاربری"/>
                            <br/>
                            <input
                                className="w-100 mb-3 py-1 login-input text-right pr-1"
                                id="pass"
                                onChange={e => {
                                    this.setState({
                                        password: e.target.value
                                    })
                                }}
                                placeholder="پسورد"/>
                            <div className="mb-4 font-14 d-flex justify-content-center">
                                <span className="pr-1 cursor" style={{color: "blue"}}
                                      onClick={() => {
                                          this.setState({
                                              sabt: true
                                          })
                                      }}
                                >یکی بساز</span>
                                <span>حساب کاربری ندارید؟</span>
                            </div>
                            <button className="w-100 login-btn py-1 cw" onClick={
                                () => { this.login_req() }
                            }>ورود</button>
                        </div>
                    </fieldset>
                </section>
            </section>
        )
    }
}
