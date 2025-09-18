import { useState } from "react";
import { Link } from "react-router-dom"; // Fixed import source

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agree: true,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agree: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      agree: "",
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!formData.agree) {
      newErrors.agree = "You must agree to the terms";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Register Data:", formData);
      // Submit to server or handle next step
    }
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Register</h4>
            </div>
            <form
              onSubmit={handleSubmit}
              className="form-login form-has-password"
            >
              <div className="wrap">
                <fieldset>
                  <input
                    type="text"
                    placeholder="email address*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type={showPass ? "text" : "password"}
                    placeholder="Password*"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <span
                    className={`toggle-password ${showPass ? "" : "unshow"}`}
                    onClick={() => setShowPass((prev) => !prev)}
                  >
                    <i className="icon-eye-hide" />
                  </span>
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type={showPass2 ? "text" : "password"}
                    placeholder="Confirm Password*"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <span
                    className={`toggle-password ${showPass2 ? "" : "unshow"}`}
                    onClick={() => setShowPass2((prev) => !prev)}
                  >
                    <i className="icon-eye-hide" />
                  </span>
                  {errors.confirmPassword && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </fieldset>

                <div className="d-flex align-items-center">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        type="checkbox"
                        id="login-form_agree"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>
                    <label
                      className="text-secondary-2"
                      htmlFor="login-form_agree"
                    >
                      I agree to the &nbsp;
                    </label>
                  </div>
                  <Link to="/term-of-use" title="Terms of Service">
                    Terms of User
                  </Link>
                </div>
                {errors.agree && <span className="error">{errors.agree}</span>}
              </div>

              <div className="button-submit">
                <button className="tf-btn btn-onsurface" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>

          <div className="right">
            <h4 className="mb_8">Already have an account?</h4>
            <p className="text-secondary text-body-default">
              Welcome back. Sign in to access your personalized experience,
              saved preferences, and more. We're thrilled to have you with us
              again!
            </p>
            <Link to="/login" className="tf-btn btn-onsurface">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
