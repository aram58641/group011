import Button from "../../../Assets/Components/Buttons/Button";
import Card from "../../../Assets/Components/Cards/Card";
import Input from "../../../Assets/Components/Inputs/Input";
import styles from "./AcceptanceTest.module.scss";

function AcceptanceTest() {
    return (
        <div className={styles["boxAcceptanceTest"]}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Input type="radio" style="check-input" />
                        <Button text="welcome" color="success" />

                        <div className={styles['cards-box']}>
                            <Card
                                title="Iphone"
                                desc="12 pro max"
                                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                            />
                            <Card
                                title="Samsung"
                                desc="S22 ultra"
                                image="https://redstore.am/uploads/shop/products/large/bc06752e51e639edde21049fc6a13b26.jpg"
                            />
                            <Card
                                title="Nokia"
                                desc="2"
                                image="https://www.gizmochina.com/wp-content/uploads/2018/01/Nokia-2.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AcceptanceTest;
