import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BoxedLayout from "../components/boxedlayout";
import Container from "../components/container";
import BlogEntry from "../components/blog-entry";
import Cover from "../components/cover";
import Footer from "../components/footer";

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    let blogPosts

    if (posts.length === 0) {
        blogPosts = (
            <p>
                No blog posts found. Add markdown posts to "content/blog" (or the
                directory you specified for the "gatsby-source-filesystem" plugin in
                gatsby-config.js).
            </p>
        )
    } else {
        blogPosts = (
            <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug

                    return (
                        <li key={post.fields.slug}>
                            <BlogEntry
                                title={title}
                                date={post.frontmatter.date}
                                excerpt={post.frontmatter.description || post.excerpt}
                                link={post.fields.slug}
                            />
                        </li>
                    )
                })}
            </ol>
        )
    }

    return (
        <Container>
            <Seo title="All posts" />
            <Cover title={'Blog'} desc={'All of my posts'}/>
            <BoxedLayout>
              {blogPosts}
            </BoxedLayout>
            <Footer/>
        </Container>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
