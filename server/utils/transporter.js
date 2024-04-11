import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// configure the transporter for nodemailer to use gmail account to send mails
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
    secure: true, // false for other ports like 587, true for 465
	auth: {
		type: 'OAuth2',
		user: "pradeepmaurya@gmail.com",
		clientId: "1045612978620-0saobhu397cbt65opd68rfgcl69i5f05.apps.googleusercontent.com",
		clientSecret: "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",
		refreshToken: "1//04-eWnm1CAX5xCgYIARAAGAQSNwF-L9IrC5-1y7aEu4jHs2PrYE3W9Ut0gD094pUWOo_W8v-TSTHJXPr7V0m2wxTIPcbmwlo5dCM",
		accessToken: "ya29.a0AfB_byAwmVr4m_xAs-KUKfU10ViDMT4Teg7IjHRevMR7Yr-KpIvHHpejcdUKnRCONKBeNvLDcg32GSfXO_2UCpS_qQr1U5xcFbT_d77X4ZMGxYT-8JlPpYMFgEPIrQQeciQT76Hp_HsRNFmiMn-CeiJw-RhWlJ3lvZrKaCgYKATkSARESFQHGX2Mixama8ynoL_JtP2rIeRVlVg0171",
    	//	expires: 1484314697598,
	},
});

export default transporter;
