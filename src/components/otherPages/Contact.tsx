import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumbers: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.orderNumbers)
      newErrors.orderNumbers = "Order numbers are required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      // submit logic here...
    }
  };
  return (
    <div className="main-content">
      {/* map */}
      <div className="wrap-map">
        <div id="map-contact" className="map-contact h590">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.148272329334!2d151.20657421407668!3d-33.858885268389294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae682c546039%3A0x16da940d587922a1!2sCircular%20Quay!5e0!3m2!1sen!2s!4v1745205798630!5m2!1sen!2s"
            width="100%"
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* /map */}
      <section className="flat-spacing">
        <div className="container">
          <div className="contact-us-content">
            <div className="row">
              <div className="col-lg-4 mb-lg-30">
                <h4 className="mb_30 wow fadeInUp">New York</h4>
                <div className="mb_28">
                  <h6 className="mb_8">Phone:</h6>
                  <p className="text-body-default">+1 666 234 8888</p>
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Email:</h6>
                  <p className="text-body-default">example@example.com</p>
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Address:</h6>
                  <p className="text-body-default">
                    2163 Phillips Gap Rd, West Jefferson, North Carolina, United
                    States
                  </p>
                </div>
                <div>
                  <h6 className="mb_8">Open Time:</h6>
                  <p className="text-body-default mb_4 open-time">
                    <span>Mon - Sat:</span>
                    7:30am - 8:00pm PST
                  </p>
                  <p className="text-body-default open-time">
                    <span>Sunday:</span>
                    9:00am - 5:00pm PST
                  </p>
                </div>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <h4 className="mb_7 wow fadeInUp">Get In Touch</h4>
                <p
                  className="text_secondary mb_24 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Use the form below to get in touch with the sales team
                </p>
                <form onSubmit={handleSubmit} className="form-leave-comment">
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
                        {errors.name && (
                          <span className="error">{errors.name}</span>
                        )}
                      </fieldset>
                      <fieldset>
                        <input
                          type="email"
                          placeholder="Your Email*"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </fieldset>
                    </div>
                    <div className="cols">
                      <fieldset>
                        <input
                          type="number"
                          placeholder="Phone*"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <span className="error">{errors.phone}</span>
                        )}
                      </fieldset>
                      <fieldset>
                        <input
                          type="number"
                          placeholder="Order Numbers*"
                          name="orderNumbers"
                          value={formData.orderNumbers}
                          onChange={handleChange}
                        />
                        {errors.orderNumbers && (
                          <span className="error">{errors.orderNumbers}</span>
                        )}
                      </fieldset>
                    </div>
                    <fieldset>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Your Message*"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <span className="error">{errors.message}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="button-submit send-wrap">
                    <button className="tf-btn btn-onsurface" type="submit">
                      Send Message <i className="icon-arrow-up-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
