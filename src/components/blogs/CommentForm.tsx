import { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted comment:", formData);
      // You can send data to API or reset here
    }
  };

  return (
    <div className="leave-comment">
      <h4 className="leave-comment-heading mb_24">Leave A Comment</h4>
      <form className="form-leave-comment" onSubmit={handleSubmit}>
        <div className="wrap">
          <div className="cols">
            <fieldset>
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </fieldset>
            <fieldset>
              <input
                type="email"
                placeholder="Your Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </fieldset>
          </div>
          <fieldset>
            <textarea
              rows={4}
              placeholder="Your Message*"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </fieldset>
        </div>
        <div className="button-submit">
          <button className="tf-btn btn-onsurface" type="submit">
            Submit Review <i className="icon-arrow-up-right" />
          </button>
        </div>
      </form>
    </div>
  );
}
