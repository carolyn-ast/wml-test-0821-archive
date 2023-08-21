import React from 'react';

import { LandlordSection } from "..";
import { useStateContext } from "../../context/StateContext";

const Landlords = () => {
    const { currentCustomer, developers } = useStateContext()

    return (
        <div>
            {currentCustomer &&
            <div className="module-container">
                <div className="title title-with-object">
                    <h4>
                        {"Developed Landlords "}  
                    </h4>
                </div>
                {
                    developers.map((item) => <LandlordSection key={`landlord-by-${item}`} developer={item} />)
                }
            </div>
            }
        </div>
    )
};

export default Landlords;