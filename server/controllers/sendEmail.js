import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendMail = async (req,res) => {
    //console.log(req.body);

    const userEmail = req.body.useremail;
    const carName = req.body.name;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASS 
        },
      });
    
    transporter.verify((error,success) => {
        if(error) {
            console.log(error);
        }
        else {
            console.log("ready for messages");
        }
    });

    try {
        
        const mailOptions  = {
            from : process.env.AUTH_EMAIL,
            to : req.body.owneremail,
            subject : "Car rental approval mail",
            html : `<p>Dear Owner, your car ${carName} got a request from user ${userEmail}. 
            Requesting you to check the status in the portal and either approve or reject the request</p>`
        };
        console.log(mailOptions);
        
        await transporter.sendMail(mailOptions);
        res.json({
            status:"PENDING",
            message:"email sent to owner"
        })
    }
    catch(error) {
        res.json({
            status:"FAILED",
            message:error.message
        })
    }
}
export const sendStatusMail = async (req,res) => {
    
    console.log(req.body.useremail);
    console.log(req.body.name);
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASS 
        },
      });
    
    transporter.verify((error,success) => {
        if(error) {
            console.log(error);
        }
        else {
            console.log("ready for messages");
        }
    });

    try {
        
        const mailOptions  = {
            from : process.env.AUTH_EMAIL,
            to : req.body.useremail,
            subject : "Car rental status update",
            html : `<p>Dear User, your request has been updated by the 
            owner. 
            Requesting you to check the status in the portal</p>`
        };
        console.log(mailOptions);
        
        await transporter.sendMail(mailOptions);
        res.json({
            status:"PENDING",
            message:"email sent to owner"
        })
    }
    catch(error) {
        res.json({
            status:"FAILED",
            message:error.message
        })
    }
}