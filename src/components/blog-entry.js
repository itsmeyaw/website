import * as React from "react"
import {Link} from "gatsby";
import Mylink from "./mylink";

const BlogEntry = ({title, date, link, excerpt}) => {
    return (
        <article
            className={'mb-10 group-last-of-type:mb-0'}
            itemScope
            itemType={'http://schema.org/Article'}>
            <header className={'mb-2'}>
                <h2 className={'text-2xl md:text-4xl'}>
                    <Mylink to={link} itemProp="url">
                        <span itemProp="headline">{title}</span>
                    </Mylink>
                </h2>
                <small>{date}</small>
            </header>
            <section>
                <p
                    dangerouslySetInnerHTML={{
                        __html: excerpt,
                    }}
                    itemProp="description"
                    className={'text-md md:text-xl'}
                />
            </section>
        </article>
    )
}

export default BlogEntry