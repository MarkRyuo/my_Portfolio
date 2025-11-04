


function Card({image, title, text}) {

    return (
        <>
            <div className="p-1.5 border-1">
                <img src={image} alt="" className="rounded-xl w-full"/>
                <h1>{title}</h1>
                <p className="text-xs">{text}</p>
            </div>
        </>
    )
}

export default Card