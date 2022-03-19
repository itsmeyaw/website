import * as React from "react"
import {Link} from "gatsby";

const Mylink = ({to, href, className, target, children}) => {
    return (
        <Link to={to} href={href} className={`font-sans dark:text-amber-200 hover:underline ${className}`} target={target}>{children}</Link>
    )
}

export default Mylink