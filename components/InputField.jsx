import React  from "react";

const InputField = ({ value, label, name, placeholder, type, onChange,readOnly}) => (
  <div className="form-group">
    <label className="form-label">{label}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}  
      />
    </label>
  </div>
);

export default InputField;