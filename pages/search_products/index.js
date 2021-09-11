import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


export default class Products extends React.Component {
  render() {
    return(
        <div className="font-light position-relative vw-100 vh-100" style={{backgroundColor: "#2d2d2d"}}>
          <div className="center position-absolute text-center col-lg-3">
            <div className="mx-auto text-center mb-5 cw"
                 style={{
                   fontSize: "30px"
                 }}
            >ALWIN COLLECTION</div>
            <div className="w-90 mx-auto d-flex" dir="rtl">
              <input type="text" className="py-2 pr-3 w-100 text-right border-0 product-search-input cw" placeholder="شناسه محصول مورد نظر را وارد کنید"/>
              <div className="cw mt-2 mr-3">
                <a href="/products/1" className="cw">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </a>
              </div>
            </div>
            <header className="mt-5 pt-5 cw mb-3" style={{
              color: "burlywood"
            }}>:ثبت سفارش از طریق</header>
            <section className="d-flex justify-content-around w-50 mx-auto">
              <div className="cw">
                <a href="https://wa.me/989376489525" className="cw">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
              </div>
              <div className="cw">
                <a href="https://wa.me/989376489525" className="cw">
                  <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
              </div>
              <div className="cw">
                <a href="tel:+989376489525" className="cw">
                  <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
                </a>
              </div>
            </section>
          </div>
        </div>
    )
  }
}