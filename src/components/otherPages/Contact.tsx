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
            src="https://www.google.com/maps/embed/v1/place?q=talukder+group+nikunja&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
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
                <h4 className="mb_30 wow fadeInUp">Dhaka</h4>
                <div className="mb_28">
                  <h6 className="mb_8">Phone:</h6>
                  <p className="text-body-default">+8801966-333355</p>
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Email:</h6>
                  <p className="text-body-default">info@talukder-group.com.bd</p> 
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Address:</h6>
                  <p className="text-body-default">
                    Talukder Group of Industries, H#39,
             Lake Drive Road, Nikunja-1, Dhaka-1229, Bangladesh 
                  </p>
                </div>
                <div>
                  <h6 className="mb_8">Open Time:</h6>
                  <p className="text-body-default mb_4 open-time">       
                    <span>Sat - Thu:</span>
                    9:00am - 6:00pm 
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
