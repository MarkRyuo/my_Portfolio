


function Card({image,title, text}) {

    return (
        <>
            <div>
                <img src={image} alt="" className="w-3xs rounded-xl"/>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Card