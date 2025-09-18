import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // use `react-router-dom` instead of just `react-router`

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = { email: "", password: "" };
    let valid = true;

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
        valid = false;
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data:", formData);
      navigate("/my-account");
    }
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Login</h4>
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
                    onClick={() => setShowPass((pre) => !pre)}
                  >
                    <i className="icon-eye-hide" />
                  </span>
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </fieldset>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        className=""
                        type="checkbox"
                        id="login-form_agree"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>
                    <label htmlFor="login-form_agree">Remember me</label>
                  </div>
                  <a href="#" className="text-button forget-password link">
                    Forgot Your Password?
                  </a>
                </div>
              </div>
              <div className="button-submit">
                <button className="tf-btn btn-onsurface" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="right">
            <h4 className="mb_8">New Customer</h4>
            <p className="text-secondary text-body-default">
              Be part of our growing family of new customers! Join us today and
              unlock a world of exclusive benefits, offers, and personalized
              experiences.
            </p>
            <Link to="/register" className="tf-btn btn-onsurface">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
