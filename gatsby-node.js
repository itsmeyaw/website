const path = require('path')
const {getSlug, getTemplate} = require("./src/util/render-util")

exports.createPages = async ({graphql, actions, reporter}) => {
    const { createPage } = actions

    const result = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
      allContentfulEntry {
        nodes {
          ... on ContentfulArticle {
            contentful_id
            category
            slug
            createdAt
            title
            tags
          }
          ... on ContentfulReview {
            contentful_id
            category
            slug
            createdAt
            title
            tags
          }
          contentful_id
        }
        totalCount
      }
    }
  `)

    const allContentfulEntry = result.data['allContentfulEntry']
    const allPostsCount = allContentfulEntry['totalCount']
    const postsPerPage = result.data['site']['siteMetadata']['postsPerPage']
    const numPages = Math.ceil(allPostsCount / postsPerPage)
    const entryIdSorted = allContentfulEntry['nodes']
        .sort((e1, e2) => new Date (e2['createdAt']) - new Date(e1['createdAt']))
        .map(entry => entry['contentful_id'])

    // Create all blog pagination
    Array.from({length : numPages}).forEach((_, i) => {
        const entriesInPageI = entryIdSorted.slice(i * postsPerPage, (i + 1) * postsPerPage)

        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve('src/templates/blog-template.js'),
            context: {
                contentIds: entriesInPageI,
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

    const tagsAndId = {}
    console.log(JSON.stringify(allContentfulEntry, null, 2))
    // Create all posts
    allContentfulEntry['nodes'].forEach((entry) => {
        // Create a node
        const slug = getSlug(entry)

        createPage({
            path: slug,
            component: path.resolve(`src/templates/${getTemplate(entry)}`),
            context: {
                id: entry['contentful_id'],
                slug: slug,
            },
        })

        // Add the tags to the list
        for (const tag in entry.tags) {
            if (tagsAndId[tag] !== undefined) {
                tagsAndId.push(entry['contentful_id'])
            } else {
                tagsAndId[tag] = [entry['contentful_id']]
            }
        }
    })

    // Create pages for each tag
    Object.entries(tagsAndId).forEach(([tag, postIds]) => {

    })
}