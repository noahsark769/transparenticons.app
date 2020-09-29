import React from "react"
import { Nav } from "../components/Nav"
import Image from "../components/Image"
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { FaAppStoreIos } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

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
        return (<GradientBackground className="h-full" style={{minHeight: "100vh"}}>
            <Helmet>
                <title>Transparent App Icons</title>
            </Helmet>
            <div className="outerWrapper flex flex-col justify-center dark-mode:text-white"
                style={{fontFamily: "'Lato', Helvetica, sans-serif", minHeight: "100vh"}}>
                    <div className="innerWrapper flex flex-row justify-center leading-5 p-8">
                        <div style={{width: "300px"}} className="mr-8 hidden md:block">
                            <Image filename="phone.png" alt="App Preview" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="mb-8 flex flex-row justify-center">
                                <div style={{width: "200px"}} className="block md:hidden">
                                    <Image filename="phone.png" alt="App Preview" />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold mb-8 leading-10">Transparent App Icons</h1>
                            <p className="mb-8 font-bold">The easiest, simplest way to customize your iOS 14 Home Screen with transparent icons.</p>
                            <div className="flex flex-row items-center mb-8 justify-center md:justify-start">
                                <div style={{width: "160px"}} className="mr-8">
                                    <a href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8"><Image filename="appstore.png" alt="Download app" /></a>
                                </div>
                                <div><a className="underline" href="https://twitter.com/noahsark769/status/1310059780875022337?s=20">How It Works</a></div>
                            </div>
                            <p className="mb-8" style={{maxWidth: "500px"}}>Transparent App Icons automatically creates images which align exactly with your iPhone wallpaper background. Use these icons as Shortcuts bookmarks on your Home Screen to achieve previously impossible icon layouts, custom icon spacing, and aesthetic Home Screen designs.</p>
                            <div className="flex flex-row">
                                <a href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8"><FaAppStoreIos size={40} color={"white"} /></a>
                                <a href="https://instagram.com/transparentappicons"><FaInstagramSquare size={40} color={"white"} /></a>
                                <a href="https://twitter.com/TransparentIcns"><FaTwitterSquare size={40} color={"white"} /></a>
                            </div>
                        </div>
                    </div>
            </div>
        </GradientBackground>);
    }
}

export default IndexPage
