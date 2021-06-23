import React from 'react';
import { Component } from "react";
import PodcastItem from "../components/PodcastItem";

export default class Podcast extends Component {
    render () {
        const {recomended_podcasts} = this.props
        return (
            <section className="my-5 py-5 o-0" id="s6">
                <div className='owl-carousel mt-4' id="podcastOwl">
                    {recomended_podcasts.map((item) => (
                        <PodcastItem
                            key={item.id}
                            id={item.id}
                            title={item.post_title}
                            dis={item.post_description}
                            // img={item.img}
                        />
                    ))}
                </div>
            </section>
        )
    }
}