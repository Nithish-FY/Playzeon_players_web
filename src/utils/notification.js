import toast from 'react-hot-toast';

export const NOTIFICATION_POSITION = {
	TR: 'top-right',
	TC: 'top-center',
	BL: 'bottom-left',
	BR: 'bottom-right',
	BC: 'bottom-center',
};

export const NOTIFICATION_TYPE = {
	SUCCESS: 'success',
	ERROR: 'error',
	WARNING: 'warn',
	INFO: 'info',
};

export const NOTIFICATION_MESSAGE = {
	SUCCESS: 'Success',
};

export const notification = ({ message = NOTIFICATION_MESSAGE.SUCCESS, type = NOTIFICATION_TYPE.SUCCESS, duration = 5000 }) => {
	toast[type](message, {
		autoClose: duration,
	});
};
