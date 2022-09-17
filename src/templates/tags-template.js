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

const TagsTemplate = ({ data, pageContext }) => {
    const { currentPage, numPages, tagName } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (<></>
        /*
        <Container>
            <BoxedLayout>
                <Seo title={'Blog of itsmeYAW'}/>
                <Cover title={'Tag: ' + tagName}>
                    <MyLink to={'/blog'}>
                        Back to blog
                    </MyLink>
                </Cover>
                <div className={'mb-5'}>
                    {data['allStrapiBlogPost'].edges.map((doc) => {
                        const node = doc.node
                        const coverImage = node['featuredImage'] != null ? getImage(node['featuredImage']['localFile']) : null
                        const coverAlt = node['featuredImage'] != null ? node['featuredImage']['name'] : ''
                        const category = node['category'] != null ? node['category']['categoryName'] : 'Uncategorized'

                        return (
                            <BlogEntry title={node['title']}
                                       excerpt={node['excerpt']}
                                       coverImage={coverImage}
                                       publishDate={node['publishedAt']}
                                       coverAlt={coverAlt}
                                       tags={node['tags']}
                                       category={category}
                                       link={'/post/' + node['slug']}
                            />
                        )
                    })}
                </div>
                <div className={'flex'}>
                    <div className={'w-1/2'}>
                        {!isLast && (
                            <MyLink to={'/' + nextPage}>
                                Older Posts
                            </MyLink>
                        )}
                    </div>
                    <div className={'w-1/2 text-right'}>
                        {!isFirst && (
                            <MyLink to={'/' + prevPage}>
                                Newer Posts
                            </MyLink>
                        )}
                    </div>
                </div>
                <Footer/>
            </BoxedLayout>
        </Container>
         */
    )
}

/*
export const PageQuery = graphql`
query TagQuery($skip: Int!, $limit: Int!, $tagName: String!) {
  allStrapiBlogPost(
      skip: $skip, 
      limit: $limit, 
      sort: {fields: publishedAt, order: DESC}, 
      filter: {tags: {elemMatch: {tagName: {eq: $tagName}}}}
  ) {
    edges {
      node {
        id
        slug
        excerpt
        title
        strapi_id
        updatedAt(formatString: "dddd, DD MMMM YYYY")
        createdAt(formatString: "dddd, DD MMMM YYYY")
        publishedAt(formatString: "dddd, DD MMMM YYYY")
        content {
          data {
            content
            id
          }
        }
        featuredImage {
          strapi_id
          caption
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          mime
          name
        }
        tags {
          tagName
        }
        category {
          categoryName
        }
      }
    }
  }
}
`
 */

export default TagsTemplate