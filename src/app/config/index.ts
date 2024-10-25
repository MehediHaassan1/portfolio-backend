import dotenv from 'dotenv';

dotenv.config();


export default {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    user_name: process.env.USER_NAME,
    user_password: process.env.USER_PASSWORD,
}