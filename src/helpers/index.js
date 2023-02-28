// import { faImage, faFilePdf, faFileVideo, faFileWord } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

export const createAction = (module) => ({
	REQUEST: `${module}_REQUEST`,
	LOADING: `${module}_LOADING`,
	SUCCESS: `${module}_SUCCESS`,
	ERROR: `${module}_ERROR`,
	RESET: `${module}_RESET`,
});

export const getBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = () => resolve(reader.result);

		reader.onerror = (error) => reject(error);
	});

export const removeEmptyFields = (obj = {}) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== ""));

export const getLengthOfObj = (obj = {}) => Object.keys(obj).length;

export const checkTheObjectAllFilledWithValues = (obj = {}) => {
	const withValues = Object.fromEntries(Object.entries(obj).filter(([, value]) => value));
	const hasValues = getLengthOfObj(withValues) === getLengthOfObj(obj);
	return hasValues;
};

//For Reference
// const FileIcons = [
// 	{
// 		name: "image/png",
// 		icon: faImage,
// 	},
// 	{
// 		name: "image/jpeg",
// 		icon: faImage,
// 	},
// 	{
// 		name: "image/jpg",
// 		icon: faImage,
// 	},
// 	{
// 		name: "application/msword",
// 		icon: faFileWord,
// 	},
// 	{
// 		name: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// 		icon: faFileWord,
// 	},
// 	{
// 		name: "application/pdf",
// 		icon: faFilePdf,
// 	},
// 	{
// 		name: "video/mp4",
// 		icon: faFileVideo,
// 	},
// ];

export const dummyRequest = ({ file, onSuccess }) => {
	setTimeout(() => {
		onSuccess("ok");
	}, 0);
};

//For Referrance
// export const formParticipants = (obj) => {
// 	let requestObj = {
// 		fullName: `${obj?.firstName}${obj?.lastName ? ` ${obj?.lastName}` : ''}${obj?.middleName ? ` ${obj?.middleName}` : ''}`,
// 		photo: obj?.photo || '',
// 		suffix: obj?.suffix || '',
// 	};
// 	return requestObj;
// };

export const extractOnlyCharacters = (value = "") => value.replace(/[^A-Za-z]/gi, "");
export const extractOnlyCharactersWithSpace = (value = "") => value.replace(/[^A-Za-z ]/gi, "");
export const extractOnlyNumbers = (value = "") => value.replace(/[^0-9]/gi, "");
export const validateEmail = (email = "") => {
	let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (email.length < 1) return true;
	return !!(email.length >= 1 && reg.test(email));
};
