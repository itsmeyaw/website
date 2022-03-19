import * as React from "react"

const IntroductionSection = ({title, children}) => {
    return (
        <div className={'mb-24'}>
            <h2 className={'font-mono dark:text-white'}>./{title}</h2>
            <p className={'font-sans text-lg md:text-2xl dark:text-white'}>{children}</p>
        </div>
    )
}

export default IntroductionSection