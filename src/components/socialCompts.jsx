import NavCompts from "./navCompts";

class SocialCompts extends NavCompts {

    constructor(){
        super()
    }


    render() {

        const social = {
            gmail: "",
            linkedIn: "",
            gitHub: ""
        }

        return(
            <div>
                <img src={social.gmail} alt="" />
                <img src={social.linkedIn} alt="" />
                <img src={social.gitHub} alt="" />
            </div>
        )
    }
}