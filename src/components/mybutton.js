import * as React from "react"
import {Link} from "gatsby"

const MyButton = ({to, href, className, target, itemProp, children}) => {
    return (
        <Link to={to} href={href} className={`font-sans text-teal-600 dark:text-amber-200 ${className}`} target={target} itemProp={itemProp}>{children}</Link>
    )
}

export default MyButton