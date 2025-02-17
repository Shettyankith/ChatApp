import nodemailer from "nodemailer"

const SendEmail=async(receiverEmail,subject,message)=>{
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });
      
          await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: subject,
            text: message,
          });
        console.log("Email sent with the otp");
    }catch(e){
        console.log("Error in sending the mail",e);
    }
}

export default SendEmail;