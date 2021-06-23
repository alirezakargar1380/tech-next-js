// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }
import axios from "axios";
import {BASE_API_URL} from "./env";

export async function pages_seo()
{
  return axios.get(
      BASE_API_URL + `/pages_seo/get_result?page_type=home&post_id=0`
  )
}

export async function get_recommend_posts_by_types(page_type) {
  return axios
      .get(
          BASE_API_URL + `/recommend/${page_type}`
      )
}

export async function get_app_posts_by_title(title) {
    return axios
        .get(
            BASE_API_URL + "/app_posts/get_posts_detail/"+title
        )
}

export async function app_downloader(app_name, body, header) {
    return axios
        .post(
            BASE_API_URL + `/get_file/apps/${app_name}`,
            body,
            header
        )
}

//---------------------------- user Login and sig yu -----------------------------//
export async function user_login(body) {
    return axios
        .post(
            BASE_API_URL + "/login/user", body
        )
}

export async function user_sign(body) {
    return axios
        .post(
            BASE_API_URL + "/login/add_user", body
        )
}
//---------------------------- token validate -----------------------------//
export async function token_validation(token) {
    return axios
        .post(
            BASE_API_URL + "/token/authenticity",
            {},
            {
                headers: {
                    "token": token
                }
            }
        )
}
//---------------------------- VIEWS -----------------------------//
export async function post_views(post_types, post_id) {
    return axios
        .post(
            BASE_API_URL + `/views/${post_types}/${post_id}`
        )
}
//---------------------------- PAYMENT -----------------------------//
export async function payment_request(body, token) {
    return axios
        .post(
            BASE_API_URL + `/pay_request`, body,
            {
                headers: {
                    "token": token
                }
            }
        )
}

export async function payment_verification(body) {
    return axios
        .post(
            BASE_API_URL + `/payment_verification`, body
        )
}

export async function get_article_posts_by_title(title) {
    return axios
        .get(
            BASE_API_URL + "/article_posts/get_posts_detail/"+ title
        )
}

export async function get_recent_videos() {
    return axios
        .get(
            BASE_API_URL + "/links/recent_videos/get"
        )
}
