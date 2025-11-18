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
            <div className="flex justify-between">
                <button type="button" className="max-w-[35px]">
                    <img src={social.gmail} alt="" srcset="" className="w-full"/>
                </button>

                <button type="button" className="max-w-[35px]">
                    <img src={social.linkedIn} alt="" srcset="" className="w-full"/>
                </button>

                <button type="button" className="max-w-[35px]">
                    <img src={social.gitHub} alt="" srcset="" className="w-full"/>
                </button>
            </div>
        )
    }
}

export default SocialCompts