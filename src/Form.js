import React, { useState } from "react";
 import DWT from "./DWT_Logo.png";
import modulecss from "./Form.module.css";

import { useNavigate } from "react-router-dom";

export default function Form() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone: "",
  });

  const containerRef = React.useRef(null);

  const handleSignUpClick = () => {
    containerRef.current.classList.add(modulecss.rightpanelactive);
  };

  const handleSignInClick = () => {
    containerRef.current.classList.remove(modulecss.rightpanelactive);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://localhost:7038/api/User/login?email=${email}`
      );

      const data = await response.json();

      if (data.exists) {
        setMessage("This email is already in use.");
        if (password === data.pass) {
          console.log("ok");
          navigate("/Index");
        } else {
          setMessage("Invalid Password");
        }
      } else {
        setMessage("The email is invalid.");
      }
    } catch (error) {
      setMessage("An error occurred while checking the email.");
    }
    message && <p>{message}</p>;
  };

  /////////////////////////create account///////////////////////////////
  // const [user, setUsers] = useState({
  //     Name: "",

  //     Email: "",

  //     Password: "",

  //     Phone: "",
  // });
  // const handlechange = (column) => {
  //     setUsers({ ...user, [column]: value });
  //   };

  const create = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7038/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json(); // Parse the JSON response
      console.log(result);

      if (response.ok) {
        alert("تم حفظ البيانات بنجاح!");
      } else {
        console.error("فشل في إرسال البيانات");
      }
    } catch (error) {
      console.error("خطأ أثناء إرسال البيانات:", error);
    }

    console.log("Form Data Submitted:", formData);
    navigate("/Index");
  };

  return (
    <div className={modulecss.body}>
      <h2 className={modulecss.h2}>
        Please Sign in/up to Continue.
      </h2>
      <div className={modulecss.container} id="container" ref={containerRef}>
        <div
          className={`${modulecss.formcontainer} ${modulecss.signupcontainer}`}
        >
          {/*******************  create account **********************/}
          <form className={modulecss.form} onSubmit={create}>
            <h1 className={modulecss.h1}>Create Account</h1>
            <div className={modulecss.socialcontainer}>
            <a
                href="https://dwt.jo/"
                className={`${modulecss.social} ${modulecss.a}`}
              >
                <img src={DWT} alt="DWT"/>
              </a>
            </div>
            <input
              className={modulecss.input}
              type="text"
              placeholder="Name"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
            />
            <input
              className={modulecss.input}
              type="email"
              placeholder="Email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
            />
            <input
              className={modulecss.input}
              type="password"
              placeholder="Password"
              name="Password"
              value={formData.Password}
              onChange={handleInputChange}
            />
            <input
              className={modulecss.input}
              type="tel"
              placeholder="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleInputChange}
            />
            <button type="submit" className={modulecss.button}>
              Sign Up
            </button>
          </form>
        </div>
        <div
          className={`${modulecss.formcontainer} ${modulecss.signincontainer}`}
        >
          {/* //////////////////////LOG-IN///////////////////// */}
          <form className={modulecss.form} onSubmit={handleSubmit}>
            <h1 className={modulecss.h1}>Log in</h1>
            <div className={modulecss.socialcontainer}> 
              <a
                href="https://dwt.jo/"
                className={`${modulecss.social} ${modulecss.a}`}
              >
                <img src={DWT} alt="DWT"/>
              </a>
            </div>
            <input
              className={modulecss.input}
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={modulecss.input}
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="http://localhost:3000/#" className={modulecss.a}>
              Forgot your password?
            </a>
            <button type="submit" className={modulecss.button}>
              Log In
            </button>
          </form>
        </div>
        <div className={modulecss.overlaycontainer}>
          <div className={modulecss.overlay}>
            <div
              className={`${modulecss.overlaypanel} ${modulecss.overlayleft}`}
            >
              <h1 className={modulecss.h1}>Welcome Back!</h1>
              <p className={modulecss.p}>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={`${modulecss.button} ${modulecss.ghost}`}
                id="signIn"
                onClick={handleSignInClick}
              >
                Log In
              </button>
            </div>
            <div
              className={`${modulecss.overlaypanel} ${modulecss.overlayright}`}
            >
              <h1 className={modulecss.h1}>Hello, Friend!</h1>
              <p className={modulecss.p}>
                Enter your personal details and start your journey with us
              </p>
              <button
                className={`${modulecss.button} ${modulecss.ghost}`}
                id="signUp"
                onClick={handleSignUpClick}
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
