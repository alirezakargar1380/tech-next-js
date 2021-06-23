import {post_views} from "../hello";

export default function seen(post_type, post_id) {
    const set_item = (seen_detail) =>
    {
        sessionStorage.setItem("activity_detail", JSON.stringify(seen_detail));
    }
    const get_item = () =>
    {
        return JSON.parse(sessionStorage.getItem("activity_detail"));
    }
    const add_view_record = () =>
    {
        post_views(post_type, post_id)
    }

    if (!get_item()) {
        var seen_detail = {
            "seen_detail": {
                "seen_article": [],
                "seen_podcast": [],
                "seen_apps": []
            }
        }
        set_item(seen_detail)
    }
    if (post_type === "articles")
    {
        var activity_detail = get_item();
        var viewed_articles_id = activity_detail.seen_detail.seen_article.filter((item) => { return item });
        var viewed_apps_id = activity_detail.seen_detail.seen_apps.filter((item) => { return item })
        var vari = viewed_articles_id.some( id => id === post_id );
        if (vari === false) {
            viewed_articles_id.push(post_id);
            // add a view to this post
            add_view_record();
        }
        var seen_detail = {
            "seen_detail": {
                "seen_article": viewed_articles_id,
                "seen_podcast": [],
                "seen_apps": viewed_apps_id
            }
        }
        set_item(seen_detail);
        // console.log(get_item());
    }
    if (post_type === "apps")
    {
        var activity_detail = get_item();
        var viewed_apps_id = activity_detail.seen_detail.seen_apps.filter((item) => { return item })
        var viewed_articles_id = activity_detail.seen_detail.seen_article.filter((item) => { return item })
        var vari = viewed_apps_id.some( id => id === post_id );
        if (vari === false) {
            viewed_apps_id.push(post_id);
            // add a view to this post
            add_view_record();
        }
        var seen_detail = {
            "seen_detail": {
                "seen_article": viewed_articles_id,
                "seen_podcast": [],
                "seen_apps": viewed_apps_id
            }
        }
        console.log(seen_detail);
        set_item(seen_detail);
    }
}
