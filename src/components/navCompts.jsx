import React, { Component } from "react";
import SocialCompts from "./socialCompts";

class NavCompts extends Component {

    constructor(props){
        super(props)
    }

    render(){

        const {largeText, smallText} = this.props 

        return(
            <div className="flex justify-between">
                <div>
                    <h1>{largeText}</h1>
                    <h2>{smallText}</h2>
                </div>

                <div>
                    <SocialCompts />
                </div>
            </div>
        )
    }
}


export default NavCompts