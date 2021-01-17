import React from "react"
import Image from "../../components/Image"
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { FaAppStoreIos } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { OGImage } from "../../components/OGImage";

const GradientBackground = styled.div`
    background: rgb(133,150,240);
    background: linear-gradient(156deg, rgba(133,150,240,1) 0%, rgba(207,13,102,1) 100%);
`;

const A = styled.a`
    text-decoration: underline;
`;

function Step(props) {
    return <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="mr-8 font-bold text-2xl bg-white text-black p-2 mb-2 rounded-md flex-shrink-0">Step {props.number}</div>
        <div className="flex flex-col">
            {props.children}
        </div>
    </div>
}

class IndexPage extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-179225713-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (<GradientBackground className="h-full" style={{minHeight: "100vh"}}>
            <Helmet>
                <title>iOS 14: How To Remove the Shortcuts Notification | Transparent App Icons</title>
                <meta name="twitter:creator" content="@TransparentIcns" />
                <meta name="twitter:site" content="@TransparentIcns" />
                <meta property="og:url" content={`https://transparenticons.app/ios-14-disable-shortcuts-notification/`} />
                <meta property="og:title" content="iOS 14: How to Disable the Shortcuts Notification When Opening Apps" />
                <meta property="og:description" content="Step by step guide: How to remove the annoying banner when opening apps via Shortcuts in iOS 14" />
                <meta name="twitter:description" content="Step by step guide: How to remove the annoying banner when opening apps via Shortcuts in iOS 14" />
                <meta name="description" content="Step by step guide: How to remove the annoying banner when opening apps via Shortcuts in iOS 14" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <OGImage filename="header.png" />
            <div className="outerWrapper flex flex-col md:flex-row justify-center items-start text-white"
                style={{fontFamily: "'Lato', Helvetica, sans-serif", minHeight: "100vh"}}>
                    <div className="flex flex-col p-8 mt-20 hidden md:block" style={{maxWidth: "300px"}}>
                        <div style={{width: "150px"}} className="mr-8 hidden md:block">
                            <Image filename="phone.png" alt="App Preview" />
                        </div>
                        <h1 className="text-l font-bold mb-2 leading-10">Transparent App Icons</h1>
                        <p className="mb-8 leading-normal">The easiest, simplest way to customize your iOS 14 Home Screen with clear and empty icons.</p>
                        <div style={{width: "160px"}} className="mr-8">
                            <a href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8"><Image filename="appstore.png" alt="Download app" /></a>
                        </div>
                        <div className="flex flex-row mt-2">
                            <a href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8"><FaAppStoreIos size={40} color={"white"} /></a>
                            <a href="https://instagram.com/transparentappicons"><FaInstagramSquare size={40} color={"white"} /></a>
                            <a href="https://twitter.com/TransparentIcns"><FaTwitterSquare size={40} color={"white"} /></a>
                        </div>
                    </div>
                    <div className="flex flex-row block md:hidden p-8" style={{maxWidth: "300px"}}>
                        <h1 className="text-l font-bold leading-md">Transparent App Icons</h1>
                        <div className="flex-grow flex-1"></div>
                        <div style={{width: "160px"}}>
                            <a href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8"><Image filename="appstore.png" alt="Download app" /></a>
                        </div>
                    </div>
                    <div className="innerWrapper flex flex-row justify-center leading-5 p-8 mt-8 md:mt-20">
                        <div className="flex flex-col justify-center" style={{maxWidth: "800px"}}>
                            <h1 className="text-4xl font-bold mb-8 leading-10">iOS 14: How to Disable the Shortcuts Notification When Opening Apps</h1>
                            <div className="flex flex-row justify-center">
                                <Image filename="header.png" alt="Get rid of this notification in iOS 14.3!" className="rounded-md m-8 flex-1" style={{maxWidth: "500px"}} />
                                </div>
                            <p className="pb-8">Since iOS 14 came out, thousands of people have used <A href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8">Transparent App Icons</A> to customize their Home Screen icons with Shortcuts. In previous versions, tapping on a Home Screen shortcut to open an app would quickly open the Shortcuts app first, which was frustrating for a lot of users.</p>
                            <p>In iOS 14.3, this drop into the Shortcuts app changed to show a notification instead, which though a lot better, is still quite annoying. Luckily, like <A href="https://isenacode.com/eliminar-molesto-banner-app-atajos/">iSenaCode</A> and <A href="https://www.youtube.com/watch?v=fd8ICnhcta4">AllITalkIsTech</A> have explained, there's a way to turn off this Shortcut notification on iOS 14.</p>
                            <h1 className="text-xl font-bold mb-8 mt-8 leading-lg">Step By Step: How To Get Rid of the Shortcuts Notification Banner</h1>
                            <Step number="1">
                                <p>Create your Home Screen icons using <A href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8">Transparent App Icons</A> and follow <A href="https://twitter.com/noahsark769/status/1310059780875022337?s=20">this guide</A> to add custom Shortcut icons for your apps to your Home Screen.</p>
                            </Step>
                            <Step number="2">
                                <p>Make sure you're running iOS 14.3. The iOS version can be found in Settings under General &gt; About. Next, open the Settings app and search for "Screen Time". On the Screen Time screen, tap "See All Activity", <b className="font-bold">toggle Between "Week" and "Day" at least once</b>, then scroll down to "Notifications."</p>
                                <div className="flex flex-row items-start">
                                    <Image filename="step-1.png" alt="Search for Screen Time" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                    <Image filename="step-2.png" alt="See All Activity" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                </div>
                            </Step>
                            <Step number="3">
                                <p>Under "Notifications" find "Shortcuts". Note: you must have recieved at least one Notification from Shortcuts in order for it to display here. If Shortcuts isn't tappable, make sure you've toggled between "Day" and "Week" at the top at least once. Tap on "Shortcuts", then turn off the switch for "Allow Notifications."</p>
                                <div className="flex flex-row items-start">
                                    <Image filename="step-3.png" alt="Scroll to Notifications and find Shiortcuts" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                    <Image filename="step-4.png" alt="Turn off Notifications" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                </div>
                            </Step>
                            <Step number="4">
                                <p>Open the Shortcuts app, then tap on the "Automation" tab. Tap the "+" button in the upper right to add an Automation, then tap "Create Personal Automation." Scroll down to tap "App", tap "Choose", then select all the apps you want to open from Shortcuts on your home screen (you can select many apps).</p>
                                <div className="flex flex-row items-start">
                                    <Image filename="step-5.png" alt="Create a Personal Automation" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                    <Image filename="step-6.png" alt="Select App" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                    <Image filename="step-7.png" alt="Choose the Apps you don't want Notifications for" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                </div>
                            </Step>
                            <Step number="5">
                                <p>Tap "Next", then tap "Add Action". Search for "Zoom", then select "Set Zoom". Tap the "On" to turn it into "Off", then tap "Next" in the upper right.</p>
                                <div className="flex flex-row items-start">
                                    <Image filename="step-8.png" alt="Add Action" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                    <Image filename="step-9.png" alt="Set Zoom" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                    <Image filename="step-10.png" alt="Turn Zoom to Off" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                </div>
                            </Step>
                            <Step number="6">
                                <p>Turn the switch for "Ask Before Running" to off, then click "Done". (If you accidentally set Zoom to On, you can three-finger double-tap to zoom out again.)</p>
                                <div className="flex flex-row items-start">
                                    <Image filename="step-11.png" alt="Select App" className="rounded-md m-2 flex-1" style={{maxWidth: "300px"}} />
                                </div>
                            </Step>
                            <Step number="7">
                                <p>Tap the Shortcut from the Home Screen. No more notification! If you need help, let us know via <A href="mailto:support@transparenticons.app">email</A> or <A href="https://twitter.com/TransparentIcns">Twitter</A>.</p>
                            </Step>
                            <div className="flex flex-row p-8 mt-20 bg-red-100 rounded-md text-black">
                                <div style={{width: "300px"}} className="mr-8 hidden md:block">
                                    <Image filename="phone.png" alt="App Preview" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-4xl font-bold mb-2 leading-10">Transparent App Icons</h1>
                                    <p className="mb-8 leading-normal">The easiest, simplest way to customize your iOS 14 Home Screen with clear and empty icons.</p>
                                    <div style={{width: "160px"}} className="mr-8">
                                        <a href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8"><Image filename="appstore.png" alt="Download app" /></a>
                                    </div>
                                    <div className="flex flex-row mt-2">
                                        <a href="https://apps.apple.com/app/apple-store/id1533210346?pt=118551115&ct=w&mt=8"><FaAppStoreIos size={40} color={"black"} /></a>
                                        <a href="https://instagram.com/transparentappicons"><FaInstagramSquare size={40} color={"black"} /></a>
                                        <a href="https://twitter.com/TransparentIcns"><FaTwitterSquare size={40} color={"black"} /></a>
                                    </div>
                                    <div className="flex-grow"></div>
                                    <A href="/">Home</A>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </GradientBackground>);
    }
}

export default IndexPage
