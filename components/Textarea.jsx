import React  from "react";

const Textarea = ({ value, label, name, placeholder, onChange }) => (
  <div className="form-group">
    <label className="form-label">{label}<br/>
      
            <textarea
                name={name}
                rows="4"
                cols="60"
                minlength="0"
                maxlength="200"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
        
      >
                 
            </textarea>
    </label>
  </div>
);

export default Textarea;