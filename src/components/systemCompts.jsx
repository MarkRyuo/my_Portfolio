


function SystemCompts({sysName, url}) {

    const showSystem = (url) => {
        return url
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