

function Card({image, title, text}) {

    return (
        <>
            <div className="p-1.5 border-1 max-w-xs">
                <img src={image} alt="" className="rounded-xl w-full"/>
                <h1 className="py-1 text-2xl">{title}</h1>
                <p className="text-base">{text}</p>
            </div>
        </>
    )
}

export default Card