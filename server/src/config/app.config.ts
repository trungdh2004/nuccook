import getEnv from "../utils/getEnv";


const appEnv = () => ({
    PORT: getEnv("PORT") || 3000,
    DB_URL: getEnv("DB_URL"),
    NODE_ENV: getEnv("NODE_ENV",'development'),
    CLIENT_URL: getEnv("CLIENT_URL","http://localhost:3000"),
    JWT:{
        SECRET: getEnv("JWT_SECRET"),
        ACCESS_TOKEN_EXPIRES_IN: getEnv("JWT_ACCESS_TOKEN_EXPIRES_IN","1h"),
        REFRESH_TOKEN_EXPIRES_IN: getEnv("JWT_REFRESH_TOKEN_EXPIRES_IN"),
        REFRESH_SECRET:getEnv("REFRESH_SECRET")
    }
})

const appConfig = appEnv();

export default appConfig