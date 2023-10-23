import { useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
import checkMark from "../assets/images/icon-list.svg";
import { SubscribeForm } from "./Subscribe-form";
import { SuccessScreen } from "./Sucess";
import PropTypes from "prop-types";

export const NewsLetter = ({
  emailInput,
  setEmailInput,
  formError,
  setFormError,
}) => {
  const [isSubmitted, setIsSubmit] = useState(false);
  return (
    <div>
      {!isSubmitted ? (
        <div className="news-letter-div" role="main">
          <img src={mobile} alt="" className="mobile-img" />
          <img src={desktop} alt="" className="desktop-img" role="image" />
          <div className="news-letter-text" role="contentinfo">
            <h1 className="main-title">Stay updated!</h1>
            <p className="news-text">
              Join 60.000+ product managers receiving monthly updates on:
            </p>
            <div className="news-letter-row">
              <div className="div-1">
                <img src={checkMark} alt="" />
              </div>
              <div className="div-2">
                <span>Product discovery and building what matters</span>
              </div>
              <div className="div-1">
                <img src={checkMark} alt="" />
              </div>
              <div className="div-2">
                <span>Measuring to ensure updates are a success</span>
              </div>
              <div className="div-1">
                <img src={checkMark} alt="" />
              </div>
              <div className="div-2">
                <span>And much more!</span>
              </div>
            </div>
            <SubscribeForm
              emailInput={emailInput}
              setEmailInput={setEmailInput}
              setIsSubmit={setIsSubmit}
              formError={formError}
              setFormError={setFormError}
            />
          </div>
        </div>
      ) : (
        <SuccessScreen emailInput={emailInput} />
      )}
    </div>
  );
};

NewsLetter.propTypes = {
  isSubmitted: PropTypes.bool,
  setIsSubmit: PropTypes.func,
  emailInput: PropTypes.object,
  setEmailInput: PropTypes.func,
  formError: PropTypes.object,
  setFormError: PropTypes.func,
};
