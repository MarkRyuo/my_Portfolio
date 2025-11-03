


function Card({image, title, text}) {

    return (
        <>
            <div className="p-1.5">
                <img src={image} alt="" className="rounded-xl w-full"/>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Card