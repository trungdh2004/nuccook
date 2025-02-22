

const appEnv = () => ({
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development'
})

const appConfig = appEnv();

export default appConfig