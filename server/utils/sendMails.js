import dotenv from 'dotenv';
import transporter from '../utils/transporter.js';
import generateToken from '../utils/generateToken.js';

dotenv.config();

const sendMail = async (id, email, option,other) => {
	const frontendURL = process.env.FRONTEND_BASE_URL;

	// send email for the email verification option
	if (option === 'email verification') {
		// set the correct mail option
		const mailOptions = {
			from: `"Matrix HR " ${process.env.EMAIL}` , // sender address
			to: email,
			subject: `Password for your email ${email}`, // Subject line
			html: `<div>
					<h2>Account Created!</h2>
					Your login password is ${other}. Please remember this password when you will be sign in with email ID ${email}.
					<br>
				</div>
			`,
		};
                
		const mailSent =  transporter.sendMail(
			mailOptions,
			(err, info) => {
				if (err) {
					console.log(err);
				} else {
					//console.log(info);
				}
			}
		);

		// send a promise since nodemailer is async
		if (mailSent) return Promise.resolve(1);
	}
};

export default sendMail;
