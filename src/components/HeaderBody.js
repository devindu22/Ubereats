import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeaderBody = () => {

    return (
        <Container fluid>
            <Row variant="warning" style={{ backgroundColor: "green" }} >
                <Col xs={12} sm={4} className="my-auto px-4 mr-n4 margin-tp" style={{ color: "#FFFFFF" }}>
                    <h1 className="pr-5 text-pr">Crave it? Get it.</h1>
                    <p className="pr-5 text-pr">Search for a favourite restaurant, cuisine, or dish.</p>
                </Col>
                <Col xs={12} sm={4} className="my-4 py-4 ml-n4 px-4 margin-left" style={{ backgroundColor: "#E2F3DD" }}>
                    <h1>Enjoy 30% off (up to $20)</h1>
                    <p>For 5 orders. $50 minimum order</p>
                    <Button className="border-0" style={{ borderRadius: "16px", backgroundColor: "#000000", color: "#FFFFFF" }}>
                        See details <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Col>
                <Col xs={12} sm={4} className="my-4 py-4 ml-4 px-4 margin-left" style={{ backgroundColor: "#FDEED1", color: "#122427", borderWidth: "8px !important" }}>
                    <h1>Share the love with Family Freebies</h1>
                    <h5 className="font-weight-normal">Free item with minimum order.</h5>
                    <Button className="border-0" style={{ borderRadius: "16px", backgroundColor: "#122427", color: "#FFFFFF" }}>
                        See options <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderBody;