import React, { useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import facebook from "../../assets/images/facebook.png";
import github from "../../assets/images/github.png";
import google from "../../assets/images/google.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Reducer/LoginAction";
function Login() {
  const [buttonsStatus, setButtonsStatus] = useState(false);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.isEmail(loginUser.email) === false) {
      return toast.error("Enter valid Email");
    }
    if (validator.isStrongPassword(loginUser.password) === false) {
      return toast.error(
        "Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20"
      );
    }
    toast.success("Login SuccessFully");
    dispatch(userLogin(loginUser.email));
    navigate("/Profile");
  };
  const readValue = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <div className="card">
            <div className="card-body">
              Login With
              <div className="text-center my-2">
                <img src={github} alt="github" className="social-icons mx-3" />
                <img src={google} alt="google" className="social-icons mx-3" />
                <img
                  src={facebook}
                  alt="facebook"
                  className="social-icons mx-3"
                />
              </div>
              <div className="text-center my-3" style={{ fontSize: "x-large" }}>
                or
              </div>
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="input-group my-3 ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="User Email"
                    onChange={readValue}
                    value={loginUser.email}
                    required
                  />
                </div>

                <div className="input-group my-3 ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="User Password"
                    onChange={readValue}
                    value={loginUser.password}
                    required
                  />
                </div>

                <div className="input-group my-3 d-flex justify-content-center">
                  <button
                    disabled={buttonsStatus}
                    type="submit"
                    className="btn btn-primary login-btn"
                  >
                    Registration
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
