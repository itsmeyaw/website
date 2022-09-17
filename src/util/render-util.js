exports.getSlug = (entry) => {
    const draftSlug = entry['slug'] !== undefined ? entry['slug'] : entry['title'].toLowerCase().split(" ").join("-")

    switch (entry['category'].toLowerCase()) {
        case 'review':
            return '/review/' + draftSlug
        case 'article':
            return '/article/' + draftSlug
        default:
            return '/post/' + draftSlug
    }
}

exports.getTemplate = (entry) => {
    switch (entry['category'].toLowerCase()) {
        case 'review':
            return 'review-template.js'
        default:
            return 'article-template.js'
    }
}