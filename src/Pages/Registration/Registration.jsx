import { useState } from "react";
import Swal from "sweetalert2";

function Registration() {
    const [validName, setValidName] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [validChecked, setValidChecked] = useState("");

    const ChangeName = (evt) => {
        let ChangeName = evt.target.value.length;

        if (ChangeName <= 2 || ChangeName >= 20) {
            setValidName("is-invalid");
        } else {
            setValidName("is-valid");
        }
    };

    const ChangeEmail = (evt) => {
        if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                evt.target.value
            )
        ) {
            setValidEmail("is-valid");
        } else {
            setValidEmail("is-invalid");
        }
    };

    const ChangePassword = (evt) => {
        let ChangePassword = evt.target.value.length;

        if (ChangePassword <= 6 || ChangePassword >= 20) {
            setValidPassword("is-invalid");
        } else {
            setValidPassword("is-valid");
        }
    };

    const IAgree = (evt) =>{
       let checked = evt.target.checked;

        if (checked) {
            setValidChecked('is-valid')
        }else{
            setValidChecked('is-invalid')
        }
    }





    const Registration = () => {
        if (
            validName == "is-valid" &&
            validEmail == "is-valid" &&
            validPassword == "is-valid" && 
            validChecked == "is-valid"
        ) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Success',
                showConfirmButton: true,

              })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,

              })
        }
    };

    return (
        <section className="p-4" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div
                            className="card text-black"
                            style={{ borderRadius: "25px" }}
                        >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            Sign up
                                        </p>

                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="form3Example1c"
                                                        className={`form-control ${validName}`}
                                                        onChange={ChangeName}
                                                    />
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example1c"
                                                    >
                                                        Your Name
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="form3Example3c"
                                                        className={`form-control ${validEmail}`}
                                                        onChange={ChangeEmail}
                                                    />
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example3c"
                                                    >
                                                        Your Email
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="form3Example4c"
                                                        className={`form-control ${validPassword}`}
                                                        onChange={
                                                            ChangePassword
                                                        }
                                                    />
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example4c"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className={`${validChecked} form-check-input me-2`}
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                    onChange={IAgree}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="form2Example3"
                                                >
                                                    I agree all statements in{" "}
                                                    <a href="#!">
                                                        Terms of service
                                                    </a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg"
                                                    onClick={Registration}
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid"
                                            alt="Sample image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registration;
