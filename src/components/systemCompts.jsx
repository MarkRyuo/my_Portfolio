


function SystemCompts({sysName, url}) {


    const showSystem = (link) => {
        window.open(link, "_blank")
    }

    return(
        <div>
            <button type="button" onClick={() => showSystem(url)} className="cursor-pointer">
                {sysName}
            </button>
        </div>
    )
}


export default SystemCompts