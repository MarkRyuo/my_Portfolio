import React, { Component } from "react";
import gmailIcon from "../assets/gmail.png";
import linkedInIcon from "../assets/linkedin.png"
import gitHubIcon from "../assets/github-sign.png"
import data from "../data.json";

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
                <a href={`mailto: ${data.social.email.gmail}`} target="_black" className="max-w-7 cursor-pointer">
                    <img src={social.gmail} alt="" srcSet="" className="w-full"/>
                </a>

                <a href={data.social.linkedIn.url} target="_blank" className="max-w-7 cursor-pointer">
                    <img src={social.linkedIn} alt="" srcSet="" className="w-full"/>
                </a>

                <a href={data.social.gitHub.url} target="_blank" className="max-w-7 cursor-pointer">
                    <img src={social.gitHub} alt="" srcSet="" className="w-full"/>
                </a>
            </div>
        )
    }
}

export default SocialCompts