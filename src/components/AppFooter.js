import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AppStoreBadge from "../images/AppStoreBadge.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const AppFooter = () => {
    return (
        <div style={{ minHeight: "50vh", backgroundColor: "purple", color: "#FFFFFF", marginTop: "24px" }}>
            <Container >
                <Row className="py-5">
                    <Col xs={12} md={6} className="py-4">
                        <h1>UberEats</h1>
                        <a href="https://apps.apple.com/ca/app/uber-eats-food-delivery/id1058959277#?platform=iphone"><img src={AppStoreBadge} alt="Get it on the App Store" /></a>
                        <a href='https://play.google.com/store/apps/details?id=com.ubercab.eats&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                            <img height="60" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                        </a>
                    </Col>
                    <Col xs={6} md={3}>
                        <VerticalLinkGroup boldedText="About Uber Eats" arr={["Read or blog", "Buy gift cards", "Create a business account",
                            "Add your restaurant", "Sign up to deliver"]} />
                    </Col>
                    <Col xs={6} md={3}>
                        <VerticalLinkGroup boldedText="Get Help" arr={["Read FAQs", "View all cities", "View all countries",
                            "Restaurants near me", "English"]} />
                    </Col>
                </Row>
                <Row className="border-top py-4">
                    <Col>
                        <a href="https://www.facebook.com/ubereats" style={{ color: "#FFFFFF" }}><FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: "20px", margin: "8px 24px 8px 0" }} /></a>
                        <a href="https://www.twitter.com/ubereats" style={{ color: "#FFFFFF" }}><FontAwesomeIcon icon={faTwitter} style={{ fontSize: "20px", margin: "8px 24px 8px 0" }} /></a>
                        <a href="https://www.instagram.com/ubereats" style={{ color: "#FFFFFF" }}><FontAwesomeIcon icon={faInstagram} style={{ fontSize: "20px", margin: "8px 24px 8px 0" }} /></a>
                    </Col>
                    <div className="m-2 d-flex justify-content-end" >
                        <a style={{ color: "#FFFFFF" }} href="#privacy-policy">Privacy Policy</a>
                        <a style={{ color: "#FFFFFF", marginLeft: "24px" }} href="#terms">Terms</a>
                        <a style={{ color: "#FFFFFF", marginLeft: "24px" }} href="#pricing">Pricing</a>
                        <span style={{ marginLeft: "24px" }}>&#169; 2023 Uber Technologies Inc.</span>
                    </div>
                </Row>
            </Container>
        </div>

    )
}

const VerticalLinkGroup = ({ boldedText, arr }) => {

    return (
        <>
            <p><strong><a href="#to-link" style={{ color: "#FFFFFF" }}>{boldedText}</a></strong></p>
            {arr.map(item => {
                return <p key={item}><a href="#to-link" style={{ color: "#FFFFFF" }}>{item}</a></p>
            })}
        </>
    )
}

export default AppFooter;