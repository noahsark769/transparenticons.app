import React from "react"
import { Nav } from "../components/Nav"
import Image from "../components/Image"
import { StaticKitProvider } from '@statickit/react'
import { useForm, ValidationError } from '@statickit/react';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

const InnerContainer = styled.div`
    @media screen and (min-width: 768px) {
        min-width: 550px;
    }
`;

const GradientBackground = styled.div`
    background: rgb(133,150,240);
    background: linear-gradient(156deg, rgba(133,150,240,1) 0%, rgba(207,13,102,1) 100%);
`;

class IndexPage extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-179225713-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (<GradientBackground>
            <Helmet>
                <title>Transparent App Icons</title>
            </Helmet>
            <div className="outerWrapper h-screen flex flex-col dark-mode:text-white"
                style={{fontFamily: "'Lato', Helvetica, sans-serif"}}>
                <a href="https://apps.apple.com/us/app/id1533210346"><Image filename="appstore" alt="Download app" /></a>
            </div>
        </GradientBackground>);
    }
}

export default IndexPage
