/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

env: {

'PORT': 3000,
'MYSQL_HOST': '127.0.0.1',
'MYSQL_PORT': '3306',
'MYSQL_DATABASE': 'test_house_database',
'MYSQL_USER': 'root',
'MYSQL_PASSWORD': 'password',
'ZOOM_CLIENT_ID': 'b7z0Yv2CR9yFSXmBudTNEw',
'ZOOM_CLIENT_SECRET': '94Xd35UN4Z3xAkaQw53OEXzhbsjqahhS',
'DATABASE_URL': '@127.0.0.1:3306/test_house_database',
'NEXTAUTH_URL': 'http://127.0.0.1:3306',
'NEXTAUTH_SECRET': 'Z69OQdAezdJTBbcPtl+QbM/SO7vlb6TMUn9wzw5XcLU='},
}



module.exports = nextConfig
