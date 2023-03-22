import React from "react";
import { Button, Container, ButtonGroup, Form } from "react-bootstrap";
import PillDropdownBtn from "./PillDropdownBtn";
import { Link } from "react-router-dom";

const NarrowBy = ({ restaurants }) => {
    return (
        <Container >
            <div>
                <Sort restaurants={restaurants} />
                <PriceRange />
                <MaxDeliveryFee />
                <Dietary />
            </div>

        </Container>
    )
}

const Sort = ({ restaurants }) => {
    return (
        <PillDropdownBtn title="Sort">
            <Form style={{ width: "300px", backgroundColor: "yellow" }}>
                <label htmlFor="for-you">Picked for you (default)</label>
                <input id="for-you" type="radio" name="sort by" /> <br></br>

                <label htmlFor="most-popular">Most popular</label>
                <input id="most-popular" type="radio" name="sort by" /><br></br>

                <Link to="/sort-by-rating" onClick={() => console.log("madagascar")}>
                    <label htmlFor="rating">Rating</label>
                    <input id="rating" type="radio" name="sort by" />
                </Link>
                <br></br>

                <label htmlFor="delivery-time">Delivery time</label>
                <input id="delivery-time" type="radio" name="sort by" />
            </Form>
        </PillDropdownBtn>
    )
}

const PriceRange = () => {

    const btnStyle = {
        backgroundColor: "blue",
        borderWidth: "0",
        color: "#fff",
        borderRadius: "16px",
        padding: "8px 24px",
        margin: "8px"
    }
    return (
        <PillDropdownBtn title="Price">
            <ButtonGroup aria-label="First group">
                {["$10", "$20", "$30", "$40"].map(price => {
                    return (
                        <Button key={price} style={btnStyle}>{price}</Button>
                    )
                })}
            </ButtonGroup>
        </PillDropdownBtn>
    )
}

const MaxDeliveryFee = () => {
    const btnStyle = {
        borderWidth: "0",
        backgroundColor: "red",
        color: "#fff",
        width: "90px",
        borderRadius: "16px",
        padding: "8px 24px",
        margin: "8px"
    }

    // or use range inputs (in Forms)

    return (
        <PillDropdownBtn title="Max Delivery Fee">
            <ButtonGroup aria-label="First group">
                {["$2", "$3", "$6", "$6+"].map(fee => {
                    return (
                        <Button key={fee} style={btnStyle}>{fee}<span id={"line-" + { fee }}></span></Button>
                    )
                })}
            </ButtonGroup>
        </PillDropdownBtn>

    )
}

const Dietary = () => {
    return (
        <PillDropdownBtn title="Dietary">
            <Form style={{ width: "300px", backgroundColor: "green", color: "#fff" }}>
                {["Vegetarian", "Vegan", "Gluten-free", "Halal", "Allergy Friendly"].map(restriction => {
                    return (
                        <div key={restriction}>
                            <label htmlFor={restriction.toLowerCase()}>{restriction}</label>
                            <input id={restriction.toLowerCase()} type="checkbox" name="dietary restrictions" /> <br></br>
                        </div>
                    )
                })}
            </Form>
        </PillDropdownBtn>
    )
}

export default NarrowBy;