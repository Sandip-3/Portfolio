const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     atuh: {
//       api_key: process.env.API_KEY,
//     },
//   })
// );

const sendEmail = asyncHandler(async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send({
        message: "Please fill all input feild",
        success: false,
      });
    }

    //Email Matter
    transporter.sendMail({
      to: process.env.toEmail,
      from: email,
      subject: "Protfolio",
      html: `
          <h5>Detail Information</h5>
          <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${message}</p></li>
          </ul>
          `,
    });
    res.status(200).send({
      message: "Email sent",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error,
      success: false,
    });
  }
});

module.exports = { sendEmail };
