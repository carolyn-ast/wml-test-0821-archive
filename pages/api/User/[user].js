import excuteQuery from '../../../lib/db';
import {
    signIn,
    useSession,
    getSession
} from 'next-auth/react';
import { interpolate, queryFormatter } from '../../../lib/utils';

export default async function handler(req, res) {
    const { data: session } = useSession()
    console.log(session)
    if (req.method === "GET") {
        try {
        if (session) {
            var qry = `SELECT * FROM users WHERE email = ${session.email}`
            const response = await excuteQuery({
                query: qry,
                values: vals
            })
            return res.status(200).json(response)
        }
        } catch (err) {
            console.log(err.message)
            return res.status(err.statusCode || 500).json(err.message)
        }
    }
}