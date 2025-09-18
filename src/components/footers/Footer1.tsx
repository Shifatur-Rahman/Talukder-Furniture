import { Link } from "react-router-dom";
import { type FormEvent, useEffect, useState } from "react";

import CurrencySelect from "../common/CurrencySelect";
import axios from "axios";
export default function Footer1() {
  const [success, setSuccess] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        form.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error(
        "Error:",
        axios.isAxiosError(error) ? error.response?.data : "An error occurred"
      );
      setSuccess(false); // Set error state
      handleShowMessage();
      form.reset(); // Reset the form
    }
  };

  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(
      ".footer-heading-mobile"
    );

    const toggleOpen = (event: Event) => {
      const target = event.target as HTMLElement;
      const parent = target.closest<HTMLElement>(".footer-col-block");
      if (!parent) return;

      const content = parent.querySelector<HTMLElement>(".tf-collapse-content");
      if (!content) return;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-body">
              <div className="footer-left">
                <div className="footer-infor flex-grow-1">
                  <div className="footer-menu">
                    <div className="footer-col-block">
                      <h5 className="footer-heading text_white footer-heading-mobile">
                        Infomation
                      </h5>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          <li className="text-body-default">
                            <Link
                              to={`/about`}
                              className="link footer-menu_item"
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="text-body-default">
                            <Link
                              to={`/store-list`}
                              className="link footer-menu_item"
                            >
                              Our Stories
                            </Link>
                          </li>
                          <li className="text-body-default">
                            <Link
                              to={`/product-detail/1`}
                              className="link footer-menu_item"
                            >
                              Size Guide
                            </Link>
                          </li>
                          <li className="text-body-default">
                            <Link
                              to={`/contact`}
                              className="link footer-menu_item"
                            >
                              Contact us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col-block">
                      <h5 className="footer-heading text_white footer-heading-mobile">
                        Customer Services
                      </h5>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          <li className="text-body-default">
                            <Link
                              to={`/product-detail/1`}
                              className="link footer-menu_item"
                            >
                              Shipping
                            </Link>
                          </li>
                          <li className="text-body-default">
                            <Link
                              to={`/product-detail/1`}
                              className="link footer-menu_item"
                            >
                              Return &amp; Refund
                            </Link>
                          </li>
                          <li className="text-body-default">
                            <Link
                              to={`/term-of-use`}
                              className="link footer-menu_item"
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="text-body-default">
                            <Link
                              to={`/term-of-use`}
                              className="link footer-menu_item"
                            >
                              Terms &amp; Conditions
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-phone-number">
                    <h4 className="text_white number">+880 1966-333355</h4>
                    <h4 className="text_white mail">info@talukder-group.com.bd</h4>
                  </div>
                </div>
              </div>
              <div className="footer-col-block footer-newsletter">
                <h3 className="footer-heading footer-heading-mobile text_white">
                  Stay in the loop with Weekly newsletters
                </h3>
                <div className="tf-collapse-content">
                  <div
                    className={`tfSubscribeMsg  footer-sub-element ${
                      showMessage ? "active" : ""
                    }`}
                  >
                    {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
                        You have successfully subscribed.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>Something went wrong</p>
                    )}
                  </div>
                  <form
                    onSubmit={sendEmail}
                    id="subscribe-form"
                    className="form-newsletter subscribe-form"
                  >
                    <div id="subscribe-content" className="subscribe-content">
                      <fieldset className="email">
                        <input
                          id="subscribe-email"
                          type="email"
                          name="email"
                          className="subscribe-email"
                          placeholder="Enter your e-mail"
                          tabIndex={0}
                          aria-required="true"
                        />
                      </fieldset>
                      <div className="button-submit">
                        <button
                          id="subscribe-button"
                          className="subscribe-button text-body-default"
                          type="submit"
                        >
                          Subscribe
                          <i className="icon-arrow-up-right" />
                        </button>
                      </div>
                    </div>
                    <div id="subscribe-msg" className="subscribe-msg" />
                  </form>
                  <ul className="tf-social-icon type-2">
                    <li>
                      <a href="#" className="social-facebook">
                        <i className="icon icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-twiter">
                        <i className="icon icon-x" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-instagram">
                        <i className="icon icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-amazon">
                        <i className="icon icon-telegram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-wrap">
                <div className="left">
                  <p className="text-body-default text_white">
                    Copyright ©2025 Talukder. All Rights Reserved.
                  </p>
                </div>
                <div className="center">
                  <div className="tf-currencies">
                    <CurrencySelect boxStyle light />
                  </div>
                </div>
                <div className="tf-payment">
                  <ul>
                    <li>
                      <img
                        alt=""
                        src="/images/payment/payment-1.png"
                        width={76}
                        height={48}
                      />
                    </li>
                    <li>
                      <img
                        alt=""
                        src="/images/payment/payment-2.png"
                        width={76}
                        height={48}
                      />
                    </li>
                    <li>
                      <img
                        alt=""
                        src="/images/payment/payment-3.png"
                        width={76}
                        height={48}
                      />
                    </li>
                    <li>
                      <img
                        alt=""
                        src="/images/payment/payment-4.png"
                        width={76}
                        height={48}
                      />
                    </li>
                    <li>
                      <img
                        alt=""
                        src="/images/payment/payment-5.png"
                        width={76}
                        height={48}
                      />
                    </li>
                    <li>
                      <img
                        alt=""
                        src="/images/payment/payment-6.png"
                        width={76}
                        height={48}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
