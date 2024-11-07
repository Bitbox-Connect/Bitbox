const nodemailer = require('nodemailer');
require("dotenv").config();

const sendMailToAdmin = (userData) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for other ports
        auth: {
            user: process.env.EMAIL_ID, // Your email address
            pass: process.env.PASS_KEY, // Your email password or app-specific password
        },
    });

    async function main() {
        await transporter.sendMail({
            from: {
                name: `Bitbox Feedback - ${new Date().toLocaleString()}`,
                address: process.env.EMAIL_ID,
            },
            to: process.env.ADMIN_EMAIL_ID, // Admin email address
            subject: "New Feedback Submission from Bitbox ✔", // Email subject
            text: "Bitbox Feedback Form", // Plain text body
            html: `<div style="background: #282c34; color: white; padding: 20px; font-family: Arial, sans-serif;">
                        <h2 style="text-align: center; color: #61dafb;">Bitbox Feedback Form Details</h2>
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
                                <td style="padding: 10px; border: 1px solid #ddd;">Subject</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.subject}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Date of Visit</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${new Date(userData.dateOfVisit).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Device Used</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.deviceUsed}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Priority Level</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.priorityLevel}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Suggestions</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.suggestions}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Feedback</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.feedback}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Rating</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${userData.rating}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Submitted At</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>`, // HTML body content
        });
    }

    main().catch(console.error);
};

module.exports = { sendMailToAdmin };
