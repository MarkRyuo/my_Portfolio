import React, { Component } from "react";


class NavCompts extends Component {

    constructor(props){
        super(props)
    }

    render(){

        const {largeText, smallText} = this.props 

        return(
            <div>
                <div>
                    <h1>{largeText}</h1>
                    <h2>{smallText}</h2>
                </div>

                <div>

                </div>
            </div>
        )
    }
}


export default NavCompts