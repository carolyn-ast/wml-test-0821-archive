import React from 'react';

import { LandlordSection } from "..";
import { useStateContext } from "../../context/StateContext";
import { useStaticContext } from "../../context/StaticContext"

const Landlords = () => {
    const { currentCustomer, developers} = useStateContext()
    const { citys } = useStaticContext()
    return (   
        <div>
            {currentCustomer &&
            <div className="module-container">
                <div className="title title-with-object">
                    <h4>
                        {"Developed Landlords "}  
                    </h4>
                </div>
                { citys.map((item) =>
                 <LandlordSection key={`landlord-by-${item}`} city={item} />)
                }
            </div>
            }
        </div>
    )
};

export default Landlords;