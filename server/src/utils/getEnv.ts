

function getEnv(key:string,init?:string) {
    const value = process.env[key] || init;
    if (value === undefined) {
        throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
}

export default getEnv;