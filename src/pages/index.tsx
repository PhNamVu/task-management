import React from 'react'
import { Helmet } from 'react-helmet'
import { ContentLanding } from '../components/ContentLanding'
import { Header } from '../components/Header'


export const LandingPage = () => {

    return (
        <>
            <Helmet>
                <title>Birdy</title>
            </Helmet>
            <Header/>
            <ContentLanding/>
        </>
    )
}