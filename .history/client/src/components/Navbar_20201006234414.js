import React from "react"

import { NavBar, NavBarBrand } from "reactstrap"

export default props => {
    <div>
        <NavBar color="light" light expand="md">
            <NavBarBrand
            className="nav-brand"
            onClick={_ => {
                console.log("Clicked")
            }}></NavBarBrand>
            Burger John's
        </NavBar>
    </div>

}