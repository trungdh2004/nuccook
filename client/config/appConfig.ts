export const getEnv = (key: string, defaultValue: string = "") => {
	const value = process.env[key];
	if (value === undefined) {
		return defaultValue;
	}
	return value;
};
const funcConfig = () => ({
	CLIENT_ID_GOOGLE: process.env.NEXT_PUBLIC_CLIENT_ID_GOOGLE || "858714775561-eaj6dnufushlkho5h409g4von9er7ngj.apps.googleusercontent.com",
	SERVER_URL:process.env.NEXT_PUBLIC_SERVER_URL ||"http://localhost:8000/api/v1",
});

export const appConfig = funcConfig();
