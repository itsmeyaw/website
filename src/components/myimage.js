import * as React from "react"
import {GatsbyImage} from "gatsby-plugin-image"

const MyImage = ({alt, image, description}) => {
    return (
        <>
            <GatsbyImage alt={alt} image={image}/>
            <span className={`italic text-xs font-light text-gray-300`}>{description}</span>
        </>
    )
}

export default MyImage