import React from "react"

import { NavBar, NavBarBrand } from "reactstrap"

export default props => {
    return (<div>
        <NavBar color="light" light expand="md">
            <NavBarBrand
            className="nav-brand"
            onClick={_ => {
                console.log("Clicked")
            }}>
            Burger John's
            </NavBarBrand>
        </NavBar>
    </div>
    );
}