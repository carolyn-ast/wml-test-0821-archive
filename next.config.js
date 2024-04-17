/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

env: {

'PORT': 3000,
'MYSQL_HOST': '119.3.241.33',
// 'MYSQL_HOST': '127.0.0.1',
'MYSQL_PORT': '3306',
// 'MYSQL_DATABASE': 'test_house_database',
'MYSQL_DATABASE': 'yvrlinlihousetest',
'MYSQL_USER': 'my',
// 'MYSQL_PASSWORD': 'password',
'MYSQL_PASSWORD': 'Ggfpeitfklkimg@9527',
'ZOOM_CLIENT_ID': 'b7z0Yv2CR9yFSXmBudTNEw',
'ZOOM_CLIENT_SECRET': '94Xd35UN4Z3xAkaQw53OEXzhbsjqahhS',
// 'DATABASE_URL': '@127.0.0.1:3306/test_house_database',
'DATABASE_URL': '@119.3.241.33:3306/yvrlinlihousetest',
'NEXTAUTH_URL': 'http://127.0.0.1:3306',
'NEXTAUTH_SECRET': 'Z69OQdAezdJTBbcPtl+QbM/SO7vlb6TMUn9wzw5XcLU='},
}



module.exports = nextConfig
