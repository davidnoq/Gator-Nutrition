import nodemailer from "nodemailer";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function contactForm(
  firstName: string,
  lastName: string,
  email: string,
  message: string
) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "Gator Nutrition <gatornutritioncontact@gmail.com>",
      to: "gatornutritioncontact@gmail.com",
      subject: "Inquiry",
      attachments: [
        {
          filename: "file.png",
          path: "./public/photos/file.png",
          cid: "logo1",
        },
      ],
      html: `
      <head>
  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  <style>
    body {
      text-align: center;
      background-color: #f9f9f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header img {
      width: 150px;
      margin-bottom: 20px;
    }
    .content p {
      font-size: 16px;
      line-height: 26px;
      color: #333333;
      margin: 16px 0;
    }
    .footer {
      font-size: 12px;
      line-height: 24px;
      color: #888888;
      margin-top: 20px;
    }
    .footer p {
      margin: 0;
    }
    .divider {
      width: 100%;
      height: 1px;
      background-color: #e0e0e0;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img alt="Gator Nutrition" src="cid:logo1" />
    </div>
    <div class="content">
      <p><strong>You have a new contact form submission!</strong></p>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>
    <div class="divider"></div>
    <div class="footer">
      <p>Best regards,</p>
      <p>The Gator Nutrition Team</p>
      <p>University of Florida</p>
    </div>
  </div>
</body>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    transporter.close();

    return "Success";
  } catch (error) {
    console.error("Error sending email:", error);
    return null;
  }
}


