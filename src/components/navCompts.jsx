import React, { Component } from "react";
import SocialCompts from "./socialCompts";

class NavCompts extends Component {

    constructor(props){
        super(props)
    }

    render(){

        const {largeText, smallText} = this.props 

        return(
            <div className="flex justify-between items-center">
                <div className="px-3">
                    <h1 className="text-2xl">{largeText}</h1>
                    <h2 className="text-base">{smallText}</h2>
                </div>

                <div className="hidden md:block">
                    <SocialCompts />
                </div>
            </div>
        )
    }
}


export default NavCompts