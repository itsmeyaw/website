import * as React from "react"
import {graphql} from "gatsby"

import Seo from "../components/seo"
import Container from "../components/container"
import BoxedLayout from "../components/boxedlayout"
import Cover from "../components/cover"
import BlogEntry from "../components/blog-entry"
import {getImage} from "gatsby-plugin-image"
import Footer from "../components/footer"
import MyLink from "../components/myLink"
import {getSlug} from "../util/render-util"

const BlogTemplate = ({ data, pageContext }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
        <Container>
            <BoxedLayout>
                <Seo title={'Blog of itsmeYAW'}/>
                <Cover title={'Blog'}/>
                <div className={'mb-5'}>
                    {data['allContentfulEntry']['nodes'].map((entry) => {
                        const coverImage = entry['featuredImage'] != null ? getImage(entry['featuredImage']['gatsbyImageData']) : null
                        const coverAlt = entry['featuredImage'] != null ? entry['featuredImage']['title'] : ''
                        const category = entry['category'] !== undefined ? entry['category']: 'Uncategorized'
                        const slug = getSlug(entry)

                        return (
                            <BlogEntry title={entry['title']}
                                       excerpt={entry['excerpt']?.childMarkdownRemark.excerpt}
                                       coverImage={coverImage}
                                       publishDate={entry['createdAt']}
                                       coverAlt={coverAlt}
                                       tags={entry['tags']}
                                       category={category}
                                       link={slug}
                            />
                        )
                    })}
                </div>
                <div className={'flex'}>
                    <div className={'w-1/2'}>
                        {!isLast && (
                            <MyLink to={'/blog/' + nextPage}>
                                Older Posts
                            </MyLink>
                        )}
                    </div>
                    <div className={'w-1/2 text-right'}>
                        {!isFirst && (
                            <MyLink to={'/blog/' + prevPage}>
                                Newer Posts
                            </MyLink>
                        )}
                    </div>
                </div>
                <Footer/>
            </BoxedLayout>
        </Container>
    )
}

export const PageQuery = graphql`
query BlogQuery($contentIds: [String]!) {
    allContentfulEntry(filter: {contentful_id: {in: $contentIds}}) {
      nodes {
        ... on ContentfulArticle {
          contentful_id
          category
          createdAt(formatString: "dddd, DD MMMM YYYY")
          slug
          title
          tags
          excerpt {
            childMarkdownRemark {
              excerpt(format: PLAIN)
            }
          }
          featuredImage {
            title
            gatsbyImageData
          }
        }
        ... on ContentfulReview {
          contentful_id
          category
          createdAt(formatString: "dddd, DD MMMM YYYY")
          excerpt {
            childMarkdownRemark {
              excerpt(format: PLAIN)
            }
          }
          tags
          title
          featuredImage {
            gatsbyImageData
            title
          }
        }
        contentful_id
      }
    }
  }
`

export default BlogTemplate