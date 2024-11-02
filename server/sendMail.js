const nodemailer = require('nodemailer');
require("dotenv").config();

const sendMailToAdmin = (userData) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for other ports
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });


    async function main() {
        await transporter.sendMail({
            from: {
                name: `Bitbox Contact - ${new Date().toLocaleString()}`,
                address: process.env.EMAIL_USER,
            },
            to: process.env.ADMIN_EMAIL_ID, // Admin email address
            subject: "New Contact Form Submission from Bitbox ✔", // Email subject
            text: "Bitbox Contact Form", // Plain text body
            html: `<div style="background: #282c34; color: white; padding: 20px; font-family: Arial, sans-serif;">
                        <h2 style="text-align: center; color: #61dafb;">Bitbox Contact Form Details</h2>
                        <table style="width: 100%; max-width: 600px; margin: 20px auto; border-collapse: collapse;">
                            <tr>
                                <th style="padding: 10px; background-color: #0076b4; color: white; border: 1px solid #ddd;">Field</th>
                                <th style="padding: 10px; background-color: #0076b4; color: white; border: 1px solid #ddd;">Value</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Message</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.msg}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Submitted At</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${new Date(userData.createdAt).toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>`, // HTML body content
        });
    }

    main().catch(console.error);
};

module.exports = { sendMailToAdmin };
