import excuteQuery from "../../lib/db";
import { interpolate, queryFormatter } from "../../lib/utils";
import { queries } from "../../lib/resource";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            var qry = ""
            if (req.query.user=== '') {
                const response = await excuteQuery({
                    query: `SELECT * FROM landlord`,
                    values: []
                    })
                    return res.status(200).json(response) 
            }
            if (req.query.user) {
                const response = await excuteQuery({
                    query: `SELECT * FROM landlord WHERE dev_first_name = 'Carroll'`,
                    values: []
                    })
                    return res.status(200).json(response) 
            }
            if (req.query.citys) {
                const vals = req.query.citys
                
            if (vals.includes('ancouver') || vals.includes('urnaby') || vals.includes('ichmond') || vals.includes('urrey') || vals.includes('oquitlam')) {
                const response = await excuteQuery({
                query: queries.landlords_by_city,
                values: vals
                })
                return res.status(200).json(response)
            } else{
                const response = await excuteQuery({
                    query: `SELECT * FROM landlord WHERE listingCity <> 'Vancouver' AND listingCity <> 'Burnaby' AND listingCity <> 'Richmond' AND listingCity <> 'Surrey' AND listingCity <> 'Coquitlam'`,
                    values:[]
                    })
                    return res.status(200).json(response)
            }
            }
            if (req.query.table) {
                qry = interpolate(/{table}/g, queries.matched_landlords_by_customer, req.query.table)
            } else {
                qry = queries.landlords_by_assistant
            }
            const vals = req.query.values
            const response = await excuteQuery({
                query: qry,
                values: vals
            })
            return res.status(200).json(response)
        } catch (err) {
            console.log(err.message)
            return res.status(err.statusCode).json(err.message)
        }
    } else if (req.method === "PUT") {
        try {
            const reqBody = req.body
            var query = ""
            if (reqBody.listingId) {
                query = queries.update_new_house
            } else {
                query = queries.update_matched_landlord
            }
            const qry_table = interpolate(/{table}/g, query, reqBody.table)
            const qry = interpolate(/{variable}/g, qry_table, queryFormatter(reqBody.updateItems))
            const values = reqBody.values
            const response = await excuteQuery({
                query: qry,
                values: values
            })
            return res.status(200).json(response)
        } catch (err) {
            console.log(err.message)
            return res.status(err.statusCode || 500).json(err.message)
        }
    } else if (req.method === "POST") {
        try {
            const reqBody = req.body
            const qry_table = interpolate(/{table}/g, queries.insert_matched_landlord, reqBody.table)
            const qry = interpolate(/{variable}/g, qry_table, queryFormatter(reqBody.values))
            const response = await excuteQuery({
                query: qry,
                values: []
            })
            return res.status(200).json(response)
        } catch (err) {
            console.log(err.message)
            return res.status(err.statusCode || 500).json(err.message)
        }
    } else if (req.method === "DELETE") {
        try {
         if ( req.query.url) {
             const qry = interpolate(/{table}/g, queries.delete_matched_landlords, req.query.table)
                const response = await excuteQuery({
                query: qry,
                values:  [req.query.customer, req.query.url]
            })
            return res.status(200).json(response)
            }
            //  qry = interpolate(/{table}/g, queries.delete_landlords, req.query.table)
            // const response = await excuteQuery({
            //     query: qry,
            //     values: [req.query.customer]
            // })
            return res.status(200).json(response)
        } catch (err) {
            console.log(err.message)
            return res.status(err.statusCode || 500).json(err.message)
        }
    }
}