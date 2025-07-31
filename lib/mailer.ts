import nodemailer from "nodemailer";

export const sendEmailToReceiver = async ({ receiverEmail, senderName, amount }) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: \`"WU Clone" <\${process.env.EMAIL_USER}>\`,
    to: receiverEmail,
    subject: "You've received a transaction",
    html: \`<h2>Hi,</h2><p>You have received $${amount} from ${senderName}.</p>\`
  });
};
