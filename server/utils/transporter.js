import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { clientId, clientSecret, refreshToken,accessToken } from '../utils/config.js';
dotenv.config();
// console.log(clientId, clientSecret, refreshToken,accessToken);
// configure the transporter for nodemailer to use gmail account to send mails
const currentTime = new Date().getTime();

// Calculate the timestamp for 3 days in the future (3 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
const expiresTimestamp = currentTime + (3 * 24 * 60 * 60 * 1000);
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
    secure: true, // false for other ports like 587, true for 465
	auth: {
		type: 'OAuth2',
		user: "matrixcms2024@gmail.com",
		clientId: clientId,
		clientSecret: clientSecret,
		refreshToken: refreshToken,
		accessToken: accessToken,
    	expires: expiresTimestamp,
	},
});

export default transporter;
