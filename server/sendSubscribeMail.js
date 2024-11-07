const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMailToSubscriber = (userdata) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASS_KEY,
        },
    });

    async function main() {
        try {
            await transporter.sendMail({
                from: {
                    name: "BitBox",
                    address: process.env.EMAIL_ID,
                },
                to: userdata.email,
                subject: "Welcome to BitBox! 🚀 Join the Developer Community",
                text: "Thank you for joining BitBox, your hub for project sharing and collaboration!",
                html: `
                    <div style="background-color: #f4f4f9; color: #333; padding: 20px; font-family: Arial, sans-serif;">
                        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                            <h2 style="text-align: center; color: #4a90e2;">Welcome to BitBox, ${userdata.name}!</h2>
                            <p style="font-size: 16px; line-height: 1.6; color: #555;">
                                Hi ${userdata.name},
                            </p>
                            <p style="font-size: 16px; line-height: 1.6; color: #555;">
                                Thank you for subscribing to BitBox! We're excited to have you join a growing community of developers who showcase, share, and collaborate on projects.
                            </p>
                            <p style="font-size: 16px; line-height: 1.6; color: #555;">
                                As a BitBox member, you can:
                            </p>
                            <ul style="font-size: 16px; line-height: 1.6; color: #555;">
                                <li>📂 <strong>Upload Projects:</strong> Easily upload and showcase your projects on our platform.</li>
                                <li>🔍 <strong>Discover Projects:</strong> Explore a wide range of innovative projects shared by fellow developers.</li>
                                <li>🤝 <strong>Collaborate:</strong> Connect with other developers to share feedback and collaborate on projects.</li>
                                <li>📚 <strong>Learn and Grow:</strong> Learn from shared projects and contribute to the community’s knowledge base.</li>
                            </ul>
                            <p style="font-size: 16px; line-height: 1.6; color: #555;">
                                Join us as we build a supportive environment where developers can grow, learn, and create together. Welcome aboard!
                            </p>
                            <p style="font-size: 16px; line-height: 1.6; color: #555;">
                                Warm regards, <br/>
                                The BitBox Team
                            </p>
                        </div>
                    </div>
                `,
            });
            console.log("Email sent successfully to " + userdata.email);
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }

    main();
};

module.exports = { sendMailToSubscriber };
