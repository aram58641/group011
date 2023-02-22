function Card({title,desc,image}) {
    return (
        <div className="card my-2" style= {{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title">{desc}</h6>
            </div>
        </div>
    );
}


export default Card;