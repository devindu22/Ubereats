import React from "react";
import { Row, Container } from "react-bootstrap";

const ResponsiveCardDeck = ({ children }) => {
    return (
        <Container>
            <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                {children}
            </Row>
        </Container>
    )
}

export default ResponsiveCardDeck;