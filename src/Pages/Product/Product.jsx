import ProductData from "../../Jsons/Product.json";

function Product() {
    return (
        <>
            <div className="d-flex justify-content-evenly flex-wrap">
                {ProductData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="card my-4"
                            style={{ width: "18rem" }}
                        >
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Product;
