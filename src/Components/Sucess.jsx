import checkMark from "../assets/images/icon-success.svg";
import PropTypes from "prop-types";

export const SuccessScreen = ({ emailInput }) => {
  return (
    <div className="success-div">
      <div className="success-div-container">
        <img src={checkMark} alt="" className="check-success" />
        <h1 className="success-title">Thanks for subscribing!</h1>
        <p className="success-text">
          A confirmation email has been sent to{" "}
          <strong>{emailInput.email}</strong>. Please open it and click the
          button inside to confirm your subscription
        </p>
        <a href="/">
          <button type="button" className="success-btn">
            Dismiss Message
          </button>
        </a>
      </div>
    </div>
  );
};

SuccessScreen.propTypes = {
  emailInput: PropTypes.object,
};
