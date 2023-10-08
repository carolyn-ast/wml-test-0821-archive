import React, { createContext, useContext } from 'react';

const StatContext = createContext();

export const StaticContext = ({ children }) => {

    const detailList = {
        "Submission_Date": "Submission Date",
        "LastUpdateTime": "Last Update Time",
        "名": "First Name",
        "姓": "Last Name",
        "UserId":'UserId',
        "mail": "Email",
        "wechat_name": "Wechat Name",
        "gender": "Gender",
        
        // missing address in db
        // missing phone in db
        "请填写您的目的地邮编，更好获得附近邻里的帮助": "Postal Code",
        "City": "Target City",
        "如下哪些方面需要我们的帮助？":"Need Help With",
        "Budget_price": "Budget",
        "rent_type": "Rent Type",
        "rent_date": "Wish To Rent From",
        "rent_duration": "Rent Duration",
        "几人入住？": "Tenants Number",
        "house_type": "House Type",
        "semi_underground": "Underground Acceptance",
        "room_type": "Room Type",
        "是否有宠物": "Pets Allowed",
        "Kitchen": "Kitchen",
        "Furniture": "Furniture",
        "车位": "Parking",
        "Assistant_name": "Assistant",
        "rent_status":'Rent Status',
        "Leasing_demand": "Leasing Demand",
        "Assistant_message": "Message for Assistant"
       
    }

    const options_city = {
        "1": "温哥华",
        "2": "本拿比",
        "3": "列治文",
        "4": "北素里",
        "5": "中素里",
        "6": "南素里白石",
        "7": "高贵林",
        "8": "西温",
        "9": "北温",
        "10": "满地宝",
        "11": "新西敏",
        "12": "枫树岭",
        "13": "其他城市",
        "14": "我不是租客，我不租房",
        "15": "我是房东，我要出租"
    }
    const options_rentType = {
        "1": "必须整租",
        "2": "可以接受合租"
    }

    const options_gender = {
        "1": "皆为男性",
        "2": "都是女性",
        "3": "组合",
        "4": "暂不说明"
       
    }

    const options_houseType = {
        "1": "独立屋",
        "2": "联排",
        "3": "公寓",
        "4": "后巷屋",
        "5": "只要预算符合，任何房屋类型皆可"
    }

    const options_underground = {
        "1": "可接受半地下",
        "2": "完全不接受半地下"
    }

    const options_BedroomNum = {
        "1": "1睡房",
        "2": "2睡房",
        "3": "3睡房",
        "4": "4睡房",
        "5": "5睡房",
        "6": "6 或 6个以上 睡房",
        "7": "other"
    }

    const options_pet = {
        "1": "无宠物",
        "2": "有猫",
        "3": "有狗",
        "4": "其他宠物"
    }

    const options_Kitchen = {
        "1": "必须独立厨房",
        "2": "可共用厨房",
        "3": "无所谓",
        "4": "other"
    }

    const options_furniture = {
        "1": "需要全套家具",
        "2": "需要简单家具",
        "3": "不要家具",
        "4": "有家具更好，没有也可以"
    }

    const options_parking = {
        "1": "没有车，不需要车位",
        "2": "需要正规停车位",
        "3": "可以路边停车",
        "4": "other"
    }

    const options_status = {
        "1": "YES",
        "2": "NO",
        "3": "PENDING",
        "4": "DELETED",
        "5": "看房客户"  
    }

    const options_tenantNum = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "6人以上"
    }
    
    const options_rentDuration = {
        "1": "长租1年",
        "2": "7个月到一年",
        "3": "短租半年",
        "4": "4个月到半年",
        "5": "短租三个月",
        "6": "短租一个月",
        "7": "短租一周"       
    }

    const customerCatogary = [
        "Current Clients",
        "New Clients",
        "Potential Clients",
        "Clients",
        "Past Clients"
    ]

    const externalCityTables = {
        "Vancouver": "old_vancouver_match",
        "Burnaby": "old_burnaby_match",
        "Coquitlam": "old_internal_coquitlam_match",
        "Richmond": "old_richmond_match",
        "Surrey": "old_surrey_match",
        "South Surrey": "old_surrey_match",
        "White Rock": "old_surrey_match"
    }

    const internalCityTables = {
        "Vancouver": "old_internal_vancouver_match",
        "Burnaby": "old_internal_burnaby_match",
        "Coquitlam": "old_internal_coquitlam_match",
        "Richmond": "old_internal_richmond_match",
        "Surrey": "old_internal_surrey_match",
        "South Surrey": "old_internal_surrey_match"
    }
 
    const citys =['Vancouver','Burnaby', 'Richmond','Surrey', 'Coquitlam', 'Other City']

    const users = {
        "chtecdev200@gmail.com": "Carroll",
        "diao.xc@gmail.com": "Jacqueline",
        "yvrlinli@gmail.com" :"Jacqueline"
    }

    return (
        <StatContext.Provider value={{
            detailList,
            customerCatogary,
            externalCityTables,
            internalCityTables,
            options_city,
            options_gender,
            options_rentType,
            options_BedroomNum,
            options_Kitchen,
            options_furniture,
            options_parking,
            options_underground,
            options_pet,
            options_houseType,
            options_status,
            options_tenantNum,
            options_rentDuration,
            citys,
            users
        }}
        >
            {children}
        </StatContext.Provider>
    )
};

export const useStaticContext = () => useContext(StatContext);