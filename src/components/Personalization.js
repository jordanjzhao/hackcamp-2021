import React from 'react'
import {Button} from 'react-bootstrap'

function Personalization() {
    return (
        <div style={{textAlign: "center", backgroundColor: "#E8CBC9", minHeight: "100vh"}}>
            <div className="personalization-intro" style={{paddingTop: "2%"}}>
                <span><i>Upload your headshot to get a lipstick recommendation !</i></span>
            </div>
            <div className="headshot-img" style={{paddingTop: "2%"}}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10_51)">
                        <path
                            d="M0 100C0 44.7715 44.7715 0 100 0V0C155.228 0 200 44.7715 200 100V100C200 155.228 155.228 200 100 200V200C44.7715 200 0 155.228 0 100V100Z"
                            fill="url(#paint0_linear_10_51)"/>
                        <path
                            d="M82.1953 139.249C87.9689 129.65 101.224 111.248 132.787 85.392C180.413 46.3754 135.463 10.6882 87.1738 29.6951C82.0081 31.7286 67.6933 23.588 54.4333 32.1641C45.8796 37.6964 49.2085 42.032 45.8778 46.3677C42.5472 50.7033 29.7066 50.4482 26.8936 61.7062C25.2276 68.376 29.8379 75.3624 29.2213 80.3826C28.6046 85.4028 23.7377 89.928 23.5055 96.5554C23.405 99.3545 23.8569 102.146 24.8354 104.771C25.8139 107.395 27.2998 109.801 29.2083 111.851C31.1169 113.901 33.4105 115.555 35.9584 116.719C38.5063 117.882 41.2584 118.533 44.0575 118.632C44.0804 124.166 46.2411 129.477 50.0881 133.455C53.9351 137.432 59.1707 139.77 64.7005 139.977C68.2464 140.107 71.7681 139.344 74.9426 137.759C78.0923 140.662 80.7962 141.575 82.1953 139.249Z"
                            fill="url(#paint1_linear_10_51)"/>
                        <path
                            d="M94 27.3334C85.7893 32.6 75.6313 49.8734 80.09 73.0607C81.0626 78.12 78.0233 79.6347 75.4233 73.394C67.5786 54.5667 66.6693 37.5874 80.09 29.4654C82.4233 28.0607 83.7566 29.1987 85.4233 29.0607C88.5933 28.798 92.8613 26.552 94 27.3334Z"
                            fill="url(#paint2_linear_10_51)"/>
                        <path
                            d="M83.3333 129.333C83.3333 123.333 83.1293 93.7387 83.1393 93.2387C66.6666 95.6667 67 64.3334 83.6666 72C87.3333 74.3334 97.6666 72 96.6666 52.6667C114.667 72 135.565 49.4507 137.357 67.8254C139.804 92.9154 137.342 119.173 121.749 119.175C120.044 119.154 118.343 118.984 116.667 118.667V129.333C116.667 136 128.667 139.333 128.667 139.333C128.667 139.333 107.939 158.867 99.3333 158.759C90.728 158.651 71.3333 139.333 71.3333 139.333C71.3333 139.333 83.3333 136 83.3333 129.333Z"
                            fill="url(#paint3_linear_10_51)"/>
                        <g className="mix-blend-mode:multiply">
                            <path
                                d="M116.666 118.663C108.396 116.829 100.558 113.411 93.5869 108.597C93.5869 108.597 99.339 122.659 116.645 125.327L116.666 118.663Z"
                                fill="#FFDBC9"/>
                        </g>
                        <path
                            d="M161.333 159.333C166.17 170.081 168.667 202.667 168.667 202.667H31.3333C31.3333 202.667 33.8299 170.081 38.6666 159.333C42.9039 149.918 70.8259 139.107 79.0086 136C83.7332 141.285 90.5039 144.667 99.9999 144.667C109.496 144.667 116.267 141.285 120.991 136C129.174 139.107 157.096 149.918 161.333 159.333Z"
                            fill="url(#paint4_linear_10_51)"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_10_51" x1="100" y1="200" x2="100" y2="0"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFC9B3"/>
                            <stop offset="1" stop-color="#FFD2C2"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_10_51" x1="85.971" y1="140.777" x2="90.0776" y2="23.5607"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E6864E"/>
                            <stop offset="1" stop-color="#E67240"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_10_51" x1="81.8596" y1="27.1691" x2="81.8596" y2="77.4929"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1D0024"/>
                            <stop offset="1" stop-color="#100014"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_10_51" x1="104.573" y1="52.6667" x2="104.573" y2="158.759"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFE0CC"/>
                            <stop offset="1" stop-color="#FFEADB"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_10_51" x1="99.9999" y1="136" x2="99.9999" y2="202.667"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#130027"/>
                            <stop offset="1" stop-color="#130017"/>
                        </linearGradient>
                        <clipPath id="clip0_10_51">
                            <path
                                d="M0 100C0 44.7715 44.7715 0 100 0V0C155.228 0 200 44.7715 200 100V100C200 155.228 155.228 200 100 200V200C44.7715 200 0 155.228 0 100V100Z"
                                fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="upload-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10_31)">
                        <path d="M39.6741 24.7312V24.4977C39.6741 17.9603 34.5375 12.8237 28.0001 12.8237C22.1631 12.8237 17.2601 17.0264 16.5596 22.8633C12.357 24.2642 9.32178 27.9999 9.32178 32.6695C9.32178 38.5064 13.9914 43.176 19.8283 43.176C23.7975 43.176 33.6036 43.176 37.3393 43.176C42.4758 43.176 46.6784 38.9734 46.6784 33.8369C46.6784 29.4008 43.6432 25.8986 39.6741 24.7312Z" fill="black"/>
                        <path d="M30.3348 31.5021V38.5064H25.6653V31.5021H18.6609L28.0001 22.1629L37.3392 31.5021H30.3348Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_10_31">
                            <rect width="37.3567" height="30.3523" fill="white" transform="translate(9.32178 12.8237)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="personalization-form">
                <div className="personal-style-question">
                    <p>What's your personal makeup style?</p>
                </div>
                <div className="personal-style-select"
                     style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "20vh"}}>
                    <Button variant="primary">Cute</Button>
                    <Button variant="primary">Neutral</Button>
                    <Button variant="primary">Swing</Button>
                    <Button variant="primary">Sexy</Button>
                </div>
            </div>
        </div>
    )
}

export default Personalization;