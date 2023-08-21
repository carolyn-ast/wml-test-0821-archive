import React, { useState, useEffect }  from "react";

const LandlordStatus = ({ selections, opt, handleChange }) => {
    const [checkOpt, setCheckOpt] = useState(opt)

    useEffect(() => {
        setCheckOpt(opt)
    }, [opt]);

    return (
        <div>
            {
                Object.entries(selections).map(([key, value]) => 
                    <div key={key}>
                        <label className="form-label">
                            {value}
                            <input
                                type="radio"
                                name={key}
                                value={value}
                                checked={checkOpt === key}
                                onChange={(e) => {
                                    setCheckOpt(e.target.name)
                                    handleChange(e)
                                }}
                            />
                        </label>
                    </div>
                )
            }
          </div>
    )
};

export default LandlordStatus;