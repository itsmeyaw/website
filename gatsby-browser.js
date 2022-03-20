// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { H1 } from './src/components/mdx/headers'

const components = {
    h1: H1
}

export const wrapRootElement = ({element}) => {
    return (
        <MDXProvider components={components}>
            {element}
        </MDXProvider>
    )
}
