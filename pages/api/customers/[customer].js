import excuteQuery from '../../../lib/db';

import { queries } from '../../../lib/resource';
import { interpolate, queryFormatter } from '../../../lib/utils';

export default async function handler(req, res) {
    if (req.method === "PUT") {
        try {
            const qry = interpolate(/{variable}/g, queries.update_customer, queryFormatter(req.body.vals))
            const values = [req.query.customer]
            const response = await excuteQuery({
                query: qry,
                values: values
            })
            return res.status(200).json(response)
        } catch (err) {
            console.log(err.message)
            return res.status(err.statusCode || 500).json(err.message)
        }
    }
}

