// // import nodemailer from "nodemailer";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// dotenv.config();

// const SendEmail=async(receiverEmail,subject,message)=>{
//     try{
//         // const transporter = nodemailer.createTransport({
//         //     host: process.env.SMTP_HOST,
//         //     port: process.env.SMTP_PORT,
//         //     auth: {
//         //       user: process.env.SMTP_USER,
//         //       pass: process.env.SMTP_PASS,
//         //     },
//         //   });
      
//         //   await transporter.sendMail({
//         //     from: process.env.SMTP_USER,
//         //     to: email,
//         //     subject: subject,
//         //     text: message,
//         //   });
//         const response = await resend.emails.send({
//           from: "shettyankith2003@gmail.com",
//           to: receiverEmail,
//           subject: subject,
//           text: message,
//       });

//       console.log("✅ Email sent:", response);
//     }catch(e){
//         console.log("Error in sending the mail",e);
//     }
// }

// export default SendEmail;