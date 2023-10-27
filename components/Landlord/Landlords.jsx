import React from 'react';

import { LandlordSection } from "..";
import { useStateContext } from "../../context/StateContext";
import { useStaticContext } from "../../context/StaticContext"
import SearchLandlordButton from '../SearchLandlordButton';
import SearchedLandlord from './SearchedLandlord';

const Landlords = () => {
    const { currentCustomer, developers, filteredLandlordByDesc} = useStateContext()
    const { citys } = useStaticContext()
    return (   
        <div>
            {currentCustomer &&
            <div className="module-container " >
                <div className="title title-with-object">
                    <h4>
                        {"Developed Landlords "}  
                    </h4>
                </div>
                    <div >
                        <div className="search-landlord-section">
                        <SearchLandlordButton />
                        </div>
                   
                   {filteredLandlordByDesc.length !== 0 && 
                    <div> 
                       <SearchedLandlord />
                    </div>     
                   }
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