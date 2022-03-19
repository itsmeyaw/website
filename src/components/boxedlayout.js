import * as React from "react"

const BoxedLayout = ({width, children}) => {
    return (
        <div className={`max-w-content lg:mx-auto mx-16`}>
            {children}
        </div>
    )
}

export default BoxedLayout