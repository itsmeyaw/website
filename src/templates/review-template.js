import * as React from "react"
import {graphql} from "gatsby"

import Seo from "../components/seo"
import Container from "../components/container"
import BoxedLayout from "../components/boxedlayout"
import Cover from "../components/cover"
import {getImage} from "gatsby-plugin-image"
import Footer from "../components/footer"
import MyLink from "../components/myLink"
import MyImage from "../components/myimage"

const Summary = ({content}) => {
    return (<div className={'text-xl italic font-thin text-center font-quote my-5'} dangerouslySetInnerHTML={{
        __html: content
    }}/>)
}

const ReviewTemplate = ({ data, pageContext }) => {
    const blogData = data['contentfulReview']
    const postTitle = blogData['title']
    const postDate = blogData['createdAt']
    const coverImage = blogData['featuredImage'] != null ? getImage(blogData['featuredImage']['gatsbyImageData']) : null
    const coverAlt = blogData['featuredImage'] != null ? blogData['featuredImage']['title'] : ''
    const coverDesc = blogData['featuredImage']?.description
    const excerpt = blogData['excerpt']?.childMarkdownRemark.html

    return (
        <Container>
            <Seo title={postTitle} description={blogData['excerpt']?.childMarkdownRemark.excerpt}/>
            <BoxedLayout>
                <Cover title={postTitle} date={postDate}/>
                { coverImage && (
                    <div className={'mb-10 w-full text-center'}>
                        <MyImage alt={coverAlt} image={coverImage} description={coverDesc}/>
                    </div>
                )}
                { excerpt ? <Summary content={excerpt}/> : <></>}
                <div
                    dangerouslySetInnerHTML={{
                        __html: blogData['content']['childMarkdownRemark']['html'],
                    }}
                >
                </div>
                <div className={'mt-10 text-center'}>
                    <MyLink to={'/blog'}>
                        Back to blog
                    </MyLink>
                </div>
                <Footer/>
            </BoxedLayout>
        </Container>
    )
}

export const PageQuery = graphql`
query ReviewQuery($id: String!)  {
    contentfulReview(contentful_id: {eq: $id}) {
      title
      tags
      updatedAt(formatString: "dddd, DD MMMM YYYY")
      createdAt(formatString: "dddd, DD MMMM YYYY")
      featuredImage {
        gatsbyImageData
        title
        description
      }
      excerpt {
        childMarkdownRemark {
          excerpt(format: PLAIN)
          html
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default ReviewTemplate