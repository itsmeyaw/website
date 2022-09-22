import * as React from "react"

import Seo from "../components/seo"
import NameCard from "../components/namecard"
import BoxedLayout from "../components/boxedlayout"
import IntroductionSection from "../components/introduction-section"
import Experience from "../components/experience"
import Education from "../components/education"
import Award from "../components/award"
import Mylink from "../components/mylink"
import Footer from "../components/footer"
import Container from "../components/container"
import Talk from "../components/talk";
import {Helmet} from "react-helmet";

const Index = ({ data, location }) => {
    return (
        <Container>
            <Helmet>
                <script type={'text/javascript'} src={'../keybase.js'}/>
            </Helmet>
            <NameCard scale={1}/>
            <BoxedLayout>
                <Seo title={'Yudhistira Wibowo'}/>
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
                        Teach Java in Basic Programming Practical Course (<em>Praktikum: Grundlage der Programmierung</em>).
                    </Experience>
                </IntroductionSection>
                <IntroductionSection title={'educations'}>
                    <Education from={'October 2019'} to={'Current'} title={'B, Sc. Informatics'} institution={'Technical University of Munich'}/>
                    <Education from={'April 2019'} to={'September 2019'} title={'T-Kurs'} institution={'Studienkolleg Kaiserslautern'}/>
                    <Education from={'July 2015'} to={'May 2018'} title={'Natural science'} institution={'Senior High School 8 Yogyakarta'}/>
                </IntroductionSection>
                <IntroductionSection title={'awards'}>
                    <Award date={'October 2019'} title={'Deutschlandstipendium Awardee for period 2021 - 2022'}/>
                </IntroductionSection>
                <IntroductionSection title={'talks'}>
                    <Talk date={'17 September 2022'} title={'Study in Germany'} event={'After Campus Session'} eo={'Universitas Indonesia'}>
                        Explained about further study chance as a graduate in Germany and possible scholarships in Germany.
                        <br/>Shared experiences about time during accepted as Deutschlandstipendium awardee.
                        <br/><Mylink href={'https://youtu.be/7AUV4q5Z4i8?t=3270'} className={'font-bold'} target={'_blank'}>View my talk on YouTube (in Indonesian)</Mylink>
                    </Talk>
                </IntroductionSection>
                <IntroductionSection title={'contacts'}>
                    <div className={'mb-3'}>
                        <span className={'font-bold font-sans'}>Email</span>
                        <br/>
                        <span className={''}>yudhistira.wibowo[at]itsmeyaw.id</span>
                        <br/>
                        <Mylink href={'https://keybase.io/itsmeyaw/pgp_keys.asc'} className={'text-sm font-bold'}>PGP Public Key</Mylink> <span className={'text-sm'}>|</span> <Mylink href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} className={'text-sm font-bold'}>PGP Private Key</Mylink>
                        <br/>
                        <span className={'text-sm'}>PGP Fingerprint: <code className={'font-mono'} id={'fingerprint-placeholder'}/></span>
                    </div>
                    <div className={'mb-3'}>
                        <Mylink href={'https://www.linkedin.com/in/itsmeyaw/'} className={'font-bold'} target={'_blank'}>LinkedIn</Mylink>
                    </div>
                    <div className={'mb-3'}>
                        <Mylink href={'https://github.com/itsmeyaw'} className={'font-bold'} target={'_blank'}>GitHub</Mylink>
                    </div>
                    <div className={'mb-3'}>
                        <Mylink href={'https://www.instagram.com/itsmeyaw.id/'} className={'font-bold'} target={'_blank'}>Instagram</Mylink>
                    </div>
                </IntroductionSection>
                <Footer/>
            </BoxedLayout>
        </Container>
    )
}

export default Index