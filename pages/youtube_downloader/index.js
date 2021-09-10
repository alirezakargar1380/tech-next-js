import Head from 'next/head';
import React from "react";
import {
  pages_seo,
  get_recommend_posts_by_types, get_youtube_video_info
} from "./../api/hello";
// import service from "../../service/youtube_downloader.service"
import Result from "./result";

export default class Youtube_Downloader extends React.Component {
  constructor() {
    super();
    this.state = {
      showResult: false,
      // url: "https://www.youtube.com/watch?v=075AzM2G_1E%26ab_channel=ARIAKEOXER"
    }
  }

  static async getInitialProps() {
    const page_seo = await pages_seo("youtube_downloader",0);
    // const apps = await get_recommend_posts_by_types("apps");
    // const podcasts = await get_recommend_posts_by_types("podcasts");
    // const articles = await get_recommend_posts_by_types("articles");
    // console.log(podcasts.data[0]);
    return {
      page_seo: page_seo.data[0],
      // podcasts: podcasts.data,
      // apps: apps.data,
      // articles: articles.data
    }

  }

  async get_video_info() {
    try {
      const info = await get_youtube_video_info(this.state.url)
      if (info.status !== 200)
        return alert("turn on your vpn")

      this.setState({
        result: info.data,
        showResult: true
      })
    } catch (e) {
      alert(e.message)
    }
  }

  render() {
    return(
        <div>
          <main>
            <Head>
              <title>{this.props.page_seo.title}</title>
              <meta name="description" content={this.props.page_seo.description}/>
              <meta name="keywords" content={this.props.page_seo.keywords}/>
              <meta name="author" content={this.props.page_seo.author}/>
              <link rel="icon" href="/a.png"/>
            </Head>
            <div className="w-75 mx-auto text-center">
              <h4 className="mt-4">youtuber downloader</h4>
              <div className="mb-4">this platform need VPN</div>
              <div className="d-flex justify-content-center w-100">
                <input placeholder="enter your video url"
                       // value="https://www.youtube.com/watch?v=075AzM2G_1E%26ab_channel=ARIAKEOXER"
                       onChange={(e) => {
                         this.setState({
                           url: e.target.value
                         })
                       }}
                       type="text"/>
                <input
                    onClick={ async () => {
                      await this.get_video_info()
                    }}
                    type="submit"
                    value="search"/>
              </div>
              {this.state.showResult?
                  <Result
                      result={this.state.result}
                  />
                  : null }
            </div>
          </main>
          <main>

          </main>
        </div>
    )
  }
}