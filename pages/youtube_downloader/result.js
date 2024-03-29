import React from "react";
import {get_article_posts_by_title} from "../api/hello";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: {}
    }
  }

  static async getInitialProps({query}) {
    // const post_detail = await get_article_posts_by_title(encodeURI(query.artikle_title));
    return {
      data: "sd"
    }
  }

  componentDidMount() {
    const {result} = this.props
    this.setState({
      thumbnail: result.thumbnails[result.thumbnails.length - 1]
    })
  }

  render() {
    const {result} = this.props
    const {thumbnail} = this.state
    // const {formats} = result
    // const thumbnail =
    if (!result || !thumbnail) return null
    return(
        <div className="mt-5 mb-3 pt-3">
          <h5>result</h5>
          <div className="border shadow mb-4 text-left p-3">
            <div className="d-flex justify-content-start">
              title: <h6 className="ml-3 mb-0">{result.detail.title}</h6>
            </div>
            <div className="d-flex justify-content-start">
              author: <h6 className="ml-3 mb-0">{result.detail.author.name}</h6>
            </div>
            <div className="d-flex justify-content-start mt-4">
              <div>thumbnails: </div>
              <img className="w-75" src={thumbnail.url} alt=""/>
            </div>
          </div>
          <h5>links</h5>
          {result.formats.map((result) => {
            return(
                <div className="border shadow mb-4 p-3">
                  <div className="d-flex justify-content-start">
                    fps: <h6 className="ml-3 mb-0">{result.fps}</h6>
                  </div>
                  <div className="d-flex justify-content-start">
                    quality: <h6 className="ml-3 mb-0">{result.quality}</h6>
                  </div>
                  <div className="d-flex justify-content-start">
                    qualityLabel: <h6 className="ml-3 mb-0">{result.qualityLabel}</h6>
                  </div>
                  <div className="d-flex justify-content-start">
                    audioQuality: <h6 className="ml-3 mb-0">{result.audioQuality}</h6>
                  </div>
                  <div className="d-flex justify-content-start">
                    Size: <h6 className="ml-3 mb-0">{result.width}*{result.height}</h6>
                  </div>
                  <div className="d-flex justify-content-start">
                    mimeType: <h6 className="ml-3 mb-0">{result.mimeType}</h6>
                  </div>
                  <div className="w-100 text-center mt-4">
                    <a href={result.url} style={
                      {
                        color: "blue"
                      }
                    }>download</a>
                  </div>
                </div>

            )
            // console.log(result)
          })}
        </div>

    )
  }
}