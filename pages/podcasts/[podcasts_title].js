import Header from "../../components/Header";
import {Head} from "next/document";
import React from "react";
import {pages_seo} from "./../api/hello";


class Links extends React.Component{
    static async getInitialProps() {
        const page_seo = pages_seo("podcast","0")
        return {
            page: "hello"
        }
    }

    render() {
        console.log(this.props)
        return <h1>hell</h1>
    }

    // return(
    //     <section>
    //         <Header/>
    //         <Head>
    //             <title>{this.props.page.title}</title>
    //             <meta name="description" content={this.props.page.description}/>
    //             <meta name="keywords" content={this.props.page.keywords}/>
    //             <meta name="author" content={this.props.page.author}/>
    //             <link rel="icon" href="/a.png"/>
    //             <link rel="stylesheet" href="/assets/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css" />
    //             <script type="text/javascript" src="/assets/jquery.js"></script>
    //             <script type="text/javascript" src="/assets/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
    //             <script type="text/javascript" src="/assets/app.js"></script>
    //         </Head>
    //     </section>
    // )
}

export default Links