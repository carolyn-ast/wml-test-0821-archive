import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import dayjs from 'dayjs';
import { timezoneFormatter} from '../lib/timezone_utils';
const Context = createContext();

export const StateContext = ({ children }) => {
    // customers
    const [customers, setCustomers] = useState([])
    const [currentCustomer, setCurrentCustomer] = useState()
    const [filteredCustomersByID, setFilteredCustomersByID] = useState([])
    const [filteredCustomersByEmail, setFilteredCustomersByEmail] = useState([])
    const [filteredCustomersByWechat, setFilteredCustomersByWechat] = useState([])
    // internal landlords
    const [matchedLandlords, setMatchedLandlords] = useState([])
    // external landlords
    const [newHouses, setNewHouses] = useState([])

    const [showProfile, setShowProfile] = useState(false)
    const [developers, setDevelopers] = useState([])

    const dayDifference = (date1, date2) => {
        var differenceInTime =  date2.getTime() - date1.getTime();
        
            // To calculate the no. of days between two dates
        var differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays
    }

    const prioritizing_cutsomer = (customers) => {
        //起租日没过的 优先级更高 离起租日越近 优先级更高
        //起租日过了的 离起租日越近 优先级越高
        //起租日没有过的优先级超过起租日已经过了的

   const c_rent_date_not_pass= customers.filter((customer) => {
        const today = new Date()
        const rent_day = new Date(customer.rent_date)

        if (dayDifference(today,rent_day)>=0){
            return customer
        }
   })
   c_rent_date_not_pass.sort(function(a,b){
    return new Date(a.rent_date) - new Date(b.rent_date)
   })
    
   const c_rent_date_passed= customers.filter((customer) => {
    const today = new Date()
    const rent_day = new Date(customer.rent_date)

        if (dayDifference(today,rent_day) <0 ){
            return customer
        }
  })
    
  c_rent_date_passed.sort(function(a,b){
    return new Date(b.rent_date) - new Date(a.rent_date)
  })
    
    const customerList = c_rent_date_not_pass.concat(c_rent_date_passed)
    return customerList
}
    
    const updateCurrentCustomer = (customer) => {
        const updatedCustomer = customers.map((cus) => {
            if (cus.UserId === customer.UserId) {
                setCurrentCustomer(customer)
                return customer
            }
            return cus
        })
        setCustomers(updatedCustomer)
    }

    const ifLandlordMatched = (landlordItem) => {
        const filList =  matchedLandlords.filter((landlord) => {
            if (landlord.listingAdd === landlordItem.listingAdd) {
                return landlord
            }
        })
        return filList.length > 0
    }

    const validateCanadianPostalCode = (postalCode) => {    
        
        const postalCodeRegex = new RegExp(/^(?:[A-Z]\d[A-Z][ -]?\d[A-Z]\d)$/i);
       
        return postalCodeRegex.test(postalCode)
    }

    const validateStartTime = (startTime) => {    
        
        const startTimeRegex = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/i);
       
        return startTimeRegex.test(startTime)
    }

    const validateEmail = (email) => {    
        
        const emailRegex = new RegExp(/^[a-z0-9._-]{1,64}@[a-z0-9.]{1,64}$/i);
       
        return emailRegex.test(email)
    }

  
    const unique_internal = (arr) => {
        return arr.filter((v,i,a)=>a.findIndex(v2=>(v2.listingAdd===v.listingAdd))===i)
    };

    const unique_external = (arr) => {
        return arr.filter((v,i,a)=>a.findIndex(v2=>(v2.listingUrl===v.listingUrl))===i)
    };

    const handleMatchChange = async (customer) => { 
            const response = await fetch(`http://119.3.241.33:3000/customers/${customer.UserId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer yvmFp/J8vOs7QLcs1fcVpoz0ChDfoZZ5kI/l1JdyR0pbEyg7B9XIviOHZmzDV/y/HTwDfGUNt5+VnY0P"
                }
            });
           
            if (response.status === 200) {
                toast.success('Matching is now processing.')

                const response_extenal = await fetch(`http://119.3.241.33:3000/external/${customer.UserId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Authorization": "Bearer yvmFp/J8vOs7QLcs1fcVpoz0ChDfoZZ5kI/l1JdyR0pbEyg7B9XIviOHZmzDV/y/HTwDfGUNt5+VnY0P"
                    }
                });
                console.log(response_extenal)
                if (response_extenal.status === 200) {
                    toast.success('External Matching succeeded.')
                } else {
                    toast.error('External Matching error.')
                }

                const response_internal = await fetch(`http://119.3.241.33:3000/internal/${customer.UserId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Authorization": "Bearer yvmFp/J8vOs7QLcs1fcVpoz0ChDfoZZ5kI/l1JdyR0pbEyg7B9XIviOHZmzDV/y/HTwDfGUNt5+VnY0P"
                    }
                });
               
                if (response_internal.status === 200) {
                    toast.success('Internal Matching succeeded.')
                } else {
                    toast.error('Internal Matching error.')
                }

            } else {
                if (customer.rent_status === 'YES' || customer.rent_status === 'DELETED' || customer.rent_status === '看房客户')
                {
                toast.success('It is updated')
                } else {
                toast.error('Matching error.')
            }
            }
        
    }

    const handleCustomerUpdate = async (updateItems, customer) => {
        if (updateItems.length === 0) {
            return
        }
    
        if (!validateCanadianPostalCode(customer["请填写您的目的地邮编，更好获得附近邻里的帮助"])) {
            toast.error(`Please enter a valid postal code A1A 1A1.`)
            
        } else if (!validateStartTime(customer["rent_date"])) {
            toast.error(`Please enter a valid start time yyyy-mm-dd.`)

        } else if (!validateEmail(customer["mail"])) {
            toast.error(`Please enter a valid Email. xxx@x.x`)


        } else {

            const response = await fetch(`/api/customers/${customer.UserId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    vals: {
                        ...updateItems,
                        'LastUpdateTime': timezoneFormatter( dayjs(new Date()))
                    }
                })
            });
        
            if (response.status === 200) {
                const data = await response.json()
                if (!data.error) {
                    toast.success('Successfully updated the customer information')
                    const new_customer = { ...customer, 'LastUpdateTime':  timezoneFormatter(dayjs(new Date()))}
                    updateCurrentCustomer(new_customer)
                    return
                } else {
                    toast.error(`Failed to update the customer information to the database. Error: (${data.error.code}), Please check the input or try again later.`)
                    return
                }
            }
            toast.error(`Failed to update the customer information to the server side. Error code: (${response.status}), Please try again later.`)
        }
    }

    const getMatchedLandlords = async (tables, ifInternal) => {
        let databaseError = false
        let serverError = false
        let landlords = []
        const cities = Object.entries(tables).map(([key, value])=>{
            return value
        })

        for (const city in cities) {
            const values = [ currentCustomer.UserId ]
    
            const response = await fetch(`/api/landlords?table=${cities[city]}&values=${values}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
    
            if (response.status === 200){
                const data = await response.json()
                const landlordsData = JSON.parse(JSON.stringify(data))
                if (!data.error) {
                    if (landlordsData.length > 0) {
                        landlords = [...landlords, ...landlordsData]
                    }
                } else {
                    databaseError = true
                }
            } else {
                serverError = true
            }
        }
        
        if (ifInternal) {
            landlords = landlords.filter((lan) => {
                if (lan.note === '租客要求看房' ||lan.note === '房源已发客户' || !lan.note) {
                    return lan
                }
            })
            setMatchedLandlords(unique_internal(landlords))
        } else {
            const sortLandlord = [...landlords].sort((a, b) => {
                if(!a.match_level) return -1;
                if(!b.match_level) return 1;
                return a.match_level < b.match_level ? -1 : 1;
            });
            setNewHouses(unique_external(sortLandlord))
        }

        if (databaseError) {
            toast.error(`Failed to fetch the matched landlords from the database. Please contact the technical team or try agian later.`)
        } else if (serverError) {
            toast.error(`Failed to fetch the matched landlords from the server side. Please contact the technical team or try again later.`)
        }
    }

    const handleLandlordUpdate = async(table, updateItems, landlord, listingId) => {
        if (updateItems.length === 0) {
            return
        }

        var vals = [currentCustomer.UserId]

        if (listingId) {
            vals = [...vals, listingId]
        } else {
            vals = [...vals, landlord.listingAdd]
        }

        const reqBody = {
            listingId: listingId,
            table: table,
            values: vals,
            updateItems: updateItems
        }
        
        const response = await fetch("/api/landlords", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        });
        
        if (response.status === 200){
            const data = await response.json()
            if (!data.error) {
                toast.success('Successfully updated the landlord note')
                if (listingId) {
                    updateExternalLandlord({...landlord, ...updateItems})
                } else {
                    updateInternalLandlord({...landlord, ...updateItems})
                }
                return Promise.resolve('200')
            } else {
                toast.error(`Failed to update the landlord note to the database. Error: (${data.error.code}), Please check the input or try again later.`)
                return  Promise.reject('500')
            }
        }
        
        toast.error(`Failed to update the landlord note to the server side. Error code: (${response.status}), Please try again later.`)
    }

    const updateInternalLandlord = (landlord) => {
        const updatedLandlords = matchedLandlords.map((lan) => {
            if (lan.UserId === landlord.UserId && lan.listingAdd === landlord.listingAdd) {
                return landlord
            }
            return lan
        })
        
        setMatchedLandlords(updatedLandlords)
    }
    
    const updateExternalLandlord = (landlord) => {
        const updatedLandlords = newHouses.map((lan) => {
            if (lan.UserId === landlord.UserId && lan.listingId === landlord.listingId) {
                return landlord
            }
            return lan
        })
        setNewHouses(updatedLandlords)
    }

    const removeMatchedLandlords = async(table) => {
        const response = await fetch(`/api/landlords?table=${table}&customer=${currentCustomer.UserId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (response.status === 200){
            const data = await response.json()
            if (!data.error) {
                filterCustomers()
                toast.success('Successfully delete the matched landlords')
                return
            } else {
                toast.error(`Failed to delete the landlords on the database. Error: (${data.error.code}), Please check the input or try again later.`)
                return
            }
        }
        
        toast.error(`Failed to delete the landlords on the server side. Error code: (${response.status}), Please try again later.`)
    }

    const filterCustomers = () => {
        const displayCustomers = customers.filter((customer) => customer.rent_status !== "YES")
        setCustomers(displayCustomers)
    }


    return (
        <Context.Provider value={{
            customers,
            setCustomers,
            currentCustomer,
            setCurrentCustomer,
            filteredCustomersByID,
            setFilteredCustomersByID,
            filteredCustomersByEmail,
            setFilteredCustomersByEmail,
            filteredCustomersByWechat,
            setFilteredCustomersByWechat,
            matchedLandlords,
            setMatchedLandlords,
            newHouses,
            setNewHouses,
            handleMatchChange,
            dayDifference,
            prioritizing_cutsomer,
            ifLandlordMatched,
            handleCustomerUpdate,
            getMatchedLandlords,
            handleLandlordUpdate,
            removeMatchedLandlords,
            showProfile,
            setShowProfile,
            developers,
            setDevelopers
        }}
        >
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);

