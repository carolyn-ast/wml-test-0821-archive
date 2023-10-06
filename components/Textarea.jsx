import React  from "react";

const Textarea = ({ value, label, name, placeholder, onChange }) => (
  <div className="form-group">
    <label className="form-label">{label}<br/>
      
            <textarea
                name={name}
                rows="4"
                cols="60"
                minLength="0"
                maxLength="200"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
        
      >
                 
            </textarea>
    </label>
  </div>
);

export default Textarea;