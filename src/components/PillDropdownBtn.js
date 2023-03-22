import React from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import { pillBtnStyle } from "../Styles";

const PillDropdownBtn = ({ title, children }) => {

    return (
        <Dropdown as={ButtonGroup} >
            <Dropdown.Toggle style={pillBtnStyle} id="dropdown-basic">
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PillDropdownBtn;
