import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import BoxedLayout from "../components/boxedlayout"
import Cover from "../components/cover"
import Footer from "../components/footer"
import Mylink from "../components/mylink";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
      <Container>
          <BoxedLayout>
              <Seo
                  title={post.frontmatter.title}
                  description={post.frontmatter.description || post.excerpt}
              />
              <article
                  className="blog-post"
                  itemScope
                  itemType="http://schema.org/Article">
                  <Cover
                      title={post.frontmatter.title}
                      date={post.frontmatter.date}/>
                  <section
                      className={'text-lg'}
                      dangerouslySetInnerHTML={{ __html: post.html }}
                      itemProp="articleBody"
                  />
              </article>
              <nav className={'mt-10'}>
                  <hr/>
                  <ul className={'grid grid-cols-3 auto-cols-fr grid-flow-col justify-between list-none py-5'}>
                      <li className={'text-lg'}>
                          {previous && (
                              <Mylink to={previous.fields.slug} rel="prev">
                                  ← {previous.frontmatter.title}
                              </Mylink>
                          )}
                      </li>
                      <li className={'text-lg text-center'}>
                            <Mylink to={'/blog'}>
                                My Blog
                            </Mylink>
                      </li>
                      <li className={'text-lg text-right'}>
                          {next && (
                              <Mylink to={next.fields.slug} rel="next">
                                  {next.frontmatter.title} →
                              </Mylink>
                          )}
                      </li>
                  </ul>
              </nav>
              <Footer/>
          </BoxedLayout>
      </Container>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
