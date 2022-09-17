import * as React from "react"

import Seo from "../components/seo"
import NameCard from "../components/namecard"
import BoxedLayout from "../components/boxedlayout"
import IntroductionSection from "../components/introduction-section"
import Experience from "../components/experience"
import Education from "../components/education"
import Award from "../components/award"
import MyLink from "../components/myLink"
import Footer from "../components/footer"
import Container from "../components/container"
import {Helmet} from "react-helmet";
import {graphql} from "gatsby"

const Index = ({data}) => {
    const siteMetadata = data['site']['siteMetadata']

    return (
        <Container>
            <Helmet>
                <script type={'text/javascript'} src={'../keybase.js'}/>
            </Helmet>
            <NameCard scale={1}/>
            <BoxedLayout>
                <Seo title={siteMetadata.author.name}/>
                <IntroductionSection title={'about-me'}>
                    Hello, I am Yudhis, nice to meet you!<br/>
                    I am currently studying Computer Science at TUM 🇩🇪<br/>
                    My hobby is tinkering with stuff that I learned especially in programming.
                </IntroductionSection>
                <IntroductionSection title={'experiences'}>
                    <Experience from={'May 2021'} to={'Current'} title={'Working Student (Software Developer)'} company={'Siemens AG.'}>
                        Developing web application using Java.
                    </Experience>
                    <Experience from={'November 2020'} to={'January 2021'} title={'Tutor'} company={'Technical University of Munich'}>
                        Teach Java in Basic Programming Practical Course (Praktikum: Grundlage der Programmierung).
                    </Experience>
                </IntroductionSection>
                <IntroductionSection title={'educations'}>
                    <Education from={'October 2019'} to={'Current'} title={'B, Sc. Informatics'} institution={'Technical University of Munich'}/>
                    <Education from={'April 2019'} to={'September 2019'} title={'T-Kurs'} institution={'Studienkolleg Kaiserslautern'}/>
                    <Education from={'July 2015'} to={'May 2018'} title={'Natural science'} institution={'Senior High School 8 Yogyakarta'}/>
                </IntroductionSection>
                <IntroductionSection title={'awards'}>
                    <Award date={'October 2021'} title={'Deutschlandstipendium Awardee for period 2021 - 2022'}/>
                </IntroductionSection>
                <IntroductionSection title={'contacts'}>
                    <div className={'mb-3'}>
                        <span className={'font-bold font-sans'}>Email</span>
                        <br/>
                        <span className={''}>yudhistira.wibowo[at]itsmeyaw.id</span>
                        <br/>
                        <MyLink href={'https://keybase.io/itsmeyaw/pgp_keys.asc'} className={'text-sm font-bold'}>PGP Public Key</MyLink> <span className={'text-sm'}>|</span> <MyLink href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} className={'text-sm font-bold'}>PGP Private Key</MyLink>
                        <br/>
                        <span className={'text-sm'}>PGP Fingerprint: <code className={'font-mono'} id={'fingerprint-placeholder'}/></span>
                    </div>
                    <div className={'mb-3'}>
                        <MyLink to={'/blog'} className={'font-bold'}>Blog</MyLink>
                    </div>
                    <div className={'mb-3'}>
                        <MyLink href={`https://www.linkedin.com/in/${siteMetadata.social.linkedin}/`} className={'font-bold'} target={'_blank'}>LinkedIn</MyLink>
                    </div>
                    <div className={'mb-3'}>
                        <MyLink href={`https://github.com/${siteMetadata.social.github}/`} className={'font-bold'} target={'_blank'}>GitHub</MyLink>
                    </div>
                    <div className={'mb-3'}>
                        <MyLink href={`https://www.instagram.com/${siteMetadata.social.instagram}/`} className={'font-bold'} target={'_blank'}>Instagram</MyLink>
                    </div>
                    <div className={'mb-3'}>
                        <MyLink href={`https://orcid.org/${siteMetadata.social.orcid}`} className={'font-bold'} target={'_blank'}>Orcid</MyLink>
                    </div>
                </IntroductionSection>
                <Footer/>
            </BoxedLayout>
        </Container>
    )
}

export const PageQuery = graphql`
query {
  site {
    siteMetadata {
      social {
        twitter
        orcid
        linkedin
        instagram
        github
      }
      author {
        name
        summary
      }
      title
    }
  }
}
`

export default Index