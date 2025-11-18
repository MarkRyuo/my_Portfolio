import React, { Component } from "react";
import gmailIcon from "../assets/gmail.png";
import linkedInIcon from "../assets/linkedin.png"
import gitHubIcon from "../assets/github-sign.png"

class SocialCompts extends Component {

    constructor(){
        super()
    }


    render() {

        const social = {
            gmail: gmailIcon,
            linkedIn: linkedInIcon,
            gitHub: gitHubIcon
        }

        return(
            <div>
                <button type="button">
                    <img src={social.gmail} alt="" srcset="" />
                </button>

                <button type="button">
                    <img src={social.linkedIn} alt="" srcset="" />
                </button>

                <button type="button">
                    <img src={social.gitHub} alt="" srcset="" />
                </button>
            </div>
        )
    }
}

export default SocialCompts