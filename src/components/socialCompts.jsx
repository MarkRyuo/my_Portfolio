import React, { Component } from "react";

class SocialCompts extends Component {

    constructor(){
        super()
    }


    render() {

        const social = {
            gmail: "../assets/gmail.png",
            linkedIn: "../assets/linkedin.png",
            gitHub: "../assets/github-sign.png"
        }

        return(
            <div>
                <button type="button">
                    <img src={social.gmail} alt="" srcset="" />
                </button>
            </div>
        )
    }
}

export default SocialCompts