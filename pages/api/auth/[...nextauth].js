import NextAuth from 'next-auth';
import ZoomProvider from 'next-auth/providers/zoom';
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter";
import Sequelize, { DataTypes } from "sequelize";

const sequelize = new Sequelize('mysql://'+ process.env.MYSQL_USER +':' + process.env.MYSQL_PASSWORD + process.env.DATABASE_URL);

export const authOptions = {
  providers: [
    ZoomProvider({
      clientId: process.env.ZOOM_CLIENT_ID,
      clientSecret: process.env.ZOOM_CLIENT_SECRET
    })
  ],
  baseUrl: process.env.NEXTAUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define("user", {
        ...models.User,
        wechat_name: DataTypes.STRING,
        formal_name: DataTypes.STRING,
      }),
    },
  }),
  callbacks: {
    async callback(url, baseUrl) {
       // Remove 'localhost' from the callback URL
       const cleanedUrl = url.replace('http://localhost:3000', 'http://127.0.0.1:3306');
       return cleanedUrl;
    },
  //   session({ session, token, user }) {
  //     if (user) {
  //       session.user.wechat_name = user.wechat_name
  //       session.user.formal_name = user.formal_name 
  //       session.user.id = user.id          
  //     }
  //     return session;
  //  },
   async redirect({ url, baseUrl }) {
    const cleanedUrl = url.replace('http://localhost:3000', 'http://127.0.0.1:3306');
    return cleanedUrl;
  },
 },
}


export default (req, res) => NextAuth(req, res, authOptions);

