import { useState } from "react"



function SystemCompts({sysName, url}) {

    const {hasUrl, setUrl} = useState()
    const {hasSysName, setSysName} = useState()

    const showSystem = () => {
        return setUrl(url)
    }

    return(
        <div>
            <button type="button" onClick={showSystem}>
                {sysName}
            </button>
        </div>
    )
}


export default SystemCompts