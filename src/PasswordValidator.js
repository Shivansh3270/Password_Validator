import React, { useState } from "react";
import "./PasswordValidator.css";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [validLength, setValidLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Validate password conditions
    setValidLength(value.length >= 8);
    setHasNumber(/\d/.test(value));
    setUpperCase(/[A-Z]/.test(value));
    setLowerCase(/[a-z]/.test(value));
    setSpecialChar(/[!@#$%^&*]/.test(value));
  };

  return (
    <div className="password-validator">
      <h2>Password Validator</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <div className="validation">
        <p className={validLength ? "valid" : "invalid"}>
          {validLength ? "✔" : "✘"} Minimum 8 characters
        </p>
        <p className={hasNumber ? "valid" : "invalid"}>
          {hasNumber ? "✔" : "✘"} Contains a number
        </p>
        <p className={upperCase ? "valid" : "invalid"}>
          {upperCase ? "✔" : "✘"} Contains an uppercase letter
        </p>
        <p className={lowerCase ? "valid" : "invalid"}>
          {lowerCase ? "✔" : "✘"} Contains a lowercase letter
        </p>
        <p className={specialChar ? "valid" : "invalid"}>
          {specialChar ? "✔" : "✘"} Contains a special character (!@#$%^&*)
        </p>
      </div>
    </div>
  );
};

export default PasswordValidator;
