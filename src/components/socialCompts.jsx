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
            <div className="flex justify-between w-60 px-3">
                <button type="button" className="max-w-7 cursor-pointer">
                    <img src={social.gmail} alt="" srcset="" className="w-full"/>
                </button>

                <button type="button" className="max-w-7 cursor-pointer">
                    <img src={social.linkedIn} alt="" srcset="" className="w-full"/>
                </button>

                <button type="button" className="max-w-7 cursor-pointer">
                    <img src={social.gitHub} alt="" srcset="" className="w-full"/>
                </button>
            </div>
        )
    }
}

export default SocialCompts