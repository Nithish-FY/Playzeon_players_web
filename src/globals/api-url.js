module.exports = {
	API_BASE_URL: process.env.REACT_APP_VITALPACS_API_BASE_URI,
	SOCKET_BASE_URL: process.env.REACT_APP_SOCKET_BASE_URL,
	LOGOUT: "/logout",

	API_URL: {
		//auth
		LOGIN_AUTH: "/uaa/oauth/token",
		LOGOUT: "/portal-api/api/logout",
		REFRESH_TOKEN: "/uaa/oauth/token",

		// common
		GET_SPECIALITIES: "/portal-api/rest/speciality",
		GET_ROLES: "/portal-api/rest/userType ",
		GET_COUNTRY: "portal-api/rest/country",
		GET_STATE: "portal-api/rest/state?countryId=",
		GET_CITY: "portal-api/rest/city?stateId=",
		GET_REFERRAL: "portal-api/rest/city?stateId=",
	},
};
