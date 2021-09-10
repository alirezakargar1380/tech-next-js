import router from 'next/router'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  get_app_posts_by_title, app_downloader,
  token_validation, payment_request,
  payment_verification
} from "../api/hello";
import Head from 'next/head';
import { library,  } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChevronCircleLeft, faChevronLeft, fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faCheckSquare, faCoffee, faChevronLeft, faChevronCircleLeft)

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status: false
    }
  }

  static async getInitialProps({query}) {
    console.log(query)
    return {
      data: []
    }
  }

  componentDidMount() {
    document.getElementById("defaultOpenProductTab").click();
  }

  openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  selectSize(event) {
    var i, productSizelinks;

    productSizelinks = document.getElementsByClassName("product-size-box");
    for (i = 0; i < productSizelinks.length; i++) {
      productSizelinks[i].className = productSizelinks[i].className.replace(" product-size-btn-active", "");
    }

    event.currentTarget.className += " product-size-btn-active";
  }

  selectColor(event) {
    var i, productColorlinks;

    productColorlinks = document.getElementsByClassName("above-dot");
    for (i = 0; i < productColorlinks.length; i++) {
      productColorlinks[i].className = productColorlinks[i].className.replace(" active-dot", "");
    }

    event.currentTarget.className += " active-dot";
  }

  render() {
    return(
        <div dir="rtl">
          <div className="col-md-6 mx-auto px-0">
            <div className="h-50vh position-relative text-center w-100 mx-auto">
              <div className="cover-object h-inherit w-inherit mx-auto position-relative">
                <img className="h-inherit w-100"
                     style={{
                       objectFit: "contain"
                     }}
                     src="/114925804.jpg" alt=""/>
                <div className="position-absolute btn-section">
                  <button
                      className="mr-auto border-0 rounded-circle product-back-btn-c product-back-btn">
                    <div className="cw">
                      {/*<i className="fas fa-chevron-left"></i>*/}
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0 mx-auto product-detail-box">
              <header className="d-flex justify-content-between">
                <h5 className="text-left pr-4 pt-3 font-light">دست بند دست بافت</h5>
                <h4 className="text-left pl-4 pt-3 font-medium">20.00</h4>
              </header>
              <section className="mt-3 d-flex">
                <div className="w-75 text-center pr-4">
                  <h6 className="font-blod text-right" style={{color: "#9a9a9a"}}>انتخاب سایز</h6>
                  <section className="d-flex mt-4">
                    <div className="border-2 ml-3">
                      <span
                          className="py-2 px-3 product-size-box product-size-border product-size-border-radius product-size-btn-active cursor"
                          onClick={(event) => {
                            this.selectSize(event)
                          }}
                      >S</span>
                    </div>
                    <div className="border-2 ml-3">
                      <span className="py-2 px-3 product-size-box product-size-border product-size-border-radius"
                            onClick={(event) => {
                              this.selectSize(event)
                            }}
                      >S</span>
                    </div>
                    <div className="border-2 ml-3">
                      <span className="py-2 px-3 product-size-box product-size-border product-size-border-radius"
                            onClick={(event) => {
                              this.selectSize(event)
                            }}
                      >S</span>
                    </div>
                  </section>
                </div>
                <div className="w-25 text-center">
                  <div className="w-100 mb-2">
                  <span className="d-inline-flex above-dot active-dot"
                        onClick={(event) => {
                          this.selectColor(event)
                        }}
                  >
                    <span className="dot" style={{backgroundColor: "#bbb"}}></span>
                  </span>
                  </div>
                  <div className="w-100 mb-2">
                  <span className="d-inline-flex above-dot"
                        onClick={(event) => {
                          this.selectColor(event)
                        }}
                  >
                    <span className="dot" style={{backgroundColor: "#000"}}></span>
                  </span>
                  </div>
                  <div className="w-100 mb-2">
                  <span className="d-inline-flex above-dot"
                        onClick={(event) => {
                          this.selectColor(event)
                        }}
                  >
                    <span className="dot" style={{backgroundColor: "#000"}}></span>
                  </span>
                  </div>
                </div>
              </section>
              <section className="px-4 mt-3 pb-3 font-light">
                <div className="tab d-flex">
                  <button className="tablinks" id="defaultOpenProductTab" onClick={(event) => {
                    this.openCity(event, 'London')
                  }}>توضیحات محصول</button>
                  <button className="tablinks" onClick={(event) => {
                    this.openCity(event, 'Paris')
                  }}>درباره سنگ</button>
                </div>

                {/* Tab content */}
                <div id="London" className="tabcontent">
                  <h4 className="mt-3">دست بند دست ساز</h4>
                  <p>
                    دست بند دست ساز اصلاحا به دستبندی میگویند که با دست بافته میشود
                    <br/>
                    این نمونه از دستبند ها وقت زیادی برای بافت میگیرد و از ظرافت زیادی بهره میبرد
                  </p>
                </div>

                <div id="Paris" className="tabcontent">
                  <h4 className="mt-3">سنگ آتشفشانی</h4>
                  <p>
                    سنگ آتش فشانی یکی از محصولات رزالیا هست
                    <br/>
                    این سنگ رنگی مایل به خاکستری دارد و بر روی خود سوراخ هایی دارد
                  </p>
                </div>

              </section>
              <section className="bottom-0 w-100 pb-4">
                <div className="p-3">
                  <button className="w-100 p-3">افزودن به سبد خرید</button>
                </div>
              </section>
            </div>
          </div>
        </div>
    )
  }
}