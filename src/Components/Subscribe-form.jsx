import PropTypes from "prop-types";

export const SubscribeForm = ({
  emailInput,
  setEmailInput,
  setIsSubmit,
  formError,
  setFormError,
}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmailInput({
      ...emailInput,
      [name]: value,
    });
  };

  const validate = (value) => {
    const error = {};

    if (!value.email) {
      error.email = "An email is required!";
    } else if (!emailRegex.test(value.email)) {
      error.email = "A valid email is required!";
    }
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (emailRegex.test(emailInput.email)) {
      setIsSubmit(true);
    }
    setFormError(validate(emailInput));
  };

  return (
    <div className="sub-div">
      <label htmlFor="email">Email Address</label>
      <p className="error-style">
        <span>{formError?.email}</span>
      </p>
      <form
        id="form"
        onSubmit={submitHandler}
        className="sub-form"
        autoComplete="off"
      >
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email@company.com"
          value={emailInput.email}
          onChange={changeHandler}
          autoComplete="off"
          className={
            Object.keys(formError).length > 0 ? "error" : "sub-form input"
          }
        />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

SubscribeForm.propTypes = {
  isSubmitted: PropTypes.bool,
  setIsSubmit: PropTypes.func,
  emailInput: PropTypes.object,
  setEmailInput: PropTypes.func,
  formError: PropTypes.object,
  setFormError: PropTypes.func,
};
