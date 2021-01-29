import styled from 'styled-components'
import React from 'react';
import SizedBox from '../../components/sized_box';
import AppColors from '../../utils/colors';
import DartLogo from '../../public/static/tech_logos/dart.svg';
import FlutterLogo from '../../public/static/tech_logos/flutter.svg';
import JavascriptLogo from '../../public/static/tech_logos/javascript.svg';
import TypeScriptLogo from '../../public/static/tech_logos/typescript.svg';
import ReactjsLogo from '../../public/static/tech_logos/reactjs.svg';
import FirebaseLogo from '../../public/static/tech_logos/firebase.svg';
import AlgoliaLogo from '../../public/static/tech_logos/algolia.svg';
import OneSignalLogo from '../../public/static/tech_logos/onesignal.svg';
import Swift from '../../public/static/tech_logos/swift.svg';
import Java from '../../public/static/tech_logos/java.svg';
import Kotlin from '../../public/static/tech_logos/kotlin.svg';


const TechLogo = ({ logo = "", size= 70 }) => {


    const renderLogo = () => {
        switch (logo.toLowerCase()) {
            case "dart":
                return (
                    <DartLogo
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "flutter":
                return (
                    <FlutterLogo
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "javascript":
                return (
                    <JavascriptLogo
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "typescript":
                return (
                    <TypeScriptLogo
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "reactjs":
                return (
                    <ReactjsLogo
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "algolia(search api)":
                return (
                    <AlgoliaLogo
                        style={{ width: `90px`, maxHeight: `50px` }}
                    />
                )
            case "firebase":
                return (
                    <FirebaseLogo
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "onesignal\n(notification api)":
                return (
                    <OneSignalLogo
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "swift(ios)":
                return (
                    <Swift
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "java(android)":
                return (
                    <Java
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )
            case "kotlin(android)":
                return (
                    <Kotlin
                        style={{ width: `${size}px`, maxHeight: `${size}px` }}
                    />
                )


            default:
                break;
        }
    }


    return (
        <>
            {
                renderLogo()
            }
        </>

    )
}

export default TechLogo


