import { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    username: "mohanned",
    email: "mo@gmail.com",
  });

  const [errors, setErrors] = useState({
    usernameErrors: null,
    emailErrors: null,
  });

  const emptyString = (word) => word.trim().length === 0;

  //  Reusable error setter
  const setErrorMessage = (InputName, message) => {
    setErrors((prev) => ({
      ...prev,
      [`${InputName}Errors`]: message,
    }));
  };

  //  Required field check
  const requiredInputValue = (InputName, value) => {
    setErrorMessage(InputName, emptyString(value) ? `${InputName} is required` : null);
  };

  //  Max length check
  const validateInputValueMaxLength = (InputName, value, maxLength) => {
    setErrorMessage(
      InputName,
      value.length > maxLength
        ? `Length must be less than or equal to ${maxLength}`
        : null
    );
  };

  //  Email format validation
  const validateEmailFormat = (InputName, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorMessage(InputName, !emailRegex.test(value) ? "Email format is invalid" : null);
  };

  //  On input change
  const handleChange = (eo) => {
    let {  name, value } = eo.target;

    setUser((prev) => ({
      ...prev,              // let the other props
      [name]: value,   // new value
    }));

    // Validations
    requiredInputValue(name, value);

    if (name === "username") {
      validateInputValueMaxLength(name, value, 10);
    }

    if (name === "email") {
      validateEmailFormat(name, value);
    }
  };

  //  On form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submit
    Object.entries(user).forEach(([name, value]) => {
      requiredInputValue(name, value);
      if (name === "username") validateInputValueMaxLength(name, value, 10);
      if (name === "email") validateEmailFormat(name, value);
    });

    // Block submit if any errors
    const hasErrors = Object.values(errors).some((err) => err !== null);
    if (hasErrors) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    console.log(" Form Submitted:", user);
  };

  return (
    <div className="container my-5 w-50">
      <form onSubmit={handleSubmit} noValidate>
        {/* Email field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="mo@gmail.com"
            className={`form-control ${errors.emailErrors ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.emailErrors}</div>
        </div>

        {/* Username field */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            placeholder="username01122"
            className={`form-control ${errors.usernameErrors ? "is-invalid" : ""}`}
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.usernameErrors}</div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={Object.values(errors).some((err) => err !== null)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
