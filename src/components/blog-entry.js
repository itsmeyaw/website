import * as React from "react"
import MyLink from "./myLink"
import {GatsbyImage} from "gatsby-plugin-image"
import MyButton from "./mybutton"

const BlogEntry = ({title, date, link, excerpt, coverImage, coverAlt, publishDate, tags, category}) => {
    return (
        <>
            <article
                className={'py-5 border-b-black dark:border-b-white border-b last-of-type:border-0'}
                itemScope
                itemType={'http://schema.org/Article'}>
                <div className={'flex flex-col md:flex-row space-x-6'}>
                    {coverImage &&
                        <div className={'w-full md:w-2/5 lg:my-auto'}>
                            <GatsbyImage
                                image={coverImage}
                                alt={coverAlt}
                            />
                        </div>
                    }
                    <div className={`text-right flex-1`}>
                        <div className={'flex flex-col h-full'}>
                            <div className={'flex-grow'}>
                                <span itemProp={'datePublished'}>{publishDate}</span> / <span>{category}</span>
                                <header className={'mt-2 mb-2'}>
                                    <h2 className={'text-2xl md:text-5xl whitespace-pre-wrap'}>
                                        <MyLink to={link} itemProp="url">
                                            <span itemProp="headline" className={'font-bold'}>{title}</span>
                                        </MyLink>
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
                            </div>
                            <div className={'justify-self-end'}>
                                {tags.map(tag =>
                                    <MyButton
                                        to={'/tag/' + tag}
                                        className={'border rounded-xl dark:border-amber-200 border-teal-600 ml-2 px-2.5'}
                                        itemProp={'keywords'}>
                                        {tag}
                                    </MyButton>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default BlogEntry