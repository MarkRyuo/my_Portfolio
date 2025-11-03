


function card({image,title, text}) {

    return (
        <>
            <div>
                <img src={image} alt="" />
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </>
    )
}

export default card