const fs = require("fs");
const pdf = require("html-pdf");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "smtp",
    auth: {
      user: "gomycode.project@gmail.com",
      pass: "0123azeRTY"
    }
  });
 
 // declartion 
      // upload helper function
  const readAndWriteFile = (singleImg, newPath) => {
        return  new Promise((resolve, reject) => {
          fs.readFile(singleImg.path, function(err, data) {
            fs.writeFile(newPath, data, function(err) {
              if (err) {
                console.log("ERRRRRR!! :" + err);
                return reject(err);
              }
         
              let imageLink = "http://localhost:8080" + newPath.substr(1)
              return resolve([imageLink,newPath]);
            });
          });
        });
    }
      // create pdf  helper function
   const createPdf = (html, options) => {
        return     new Promise((resolve, reject) => {

            pdf.create(html, options).toBuffer(function(err, buffers) {
                if (err) {
                  console.log(err);
                  return reject(err);
                }
                return resolve(buffers);
            })
        })
    }
      // send email with pdf  helper function
   const senEmail = (mailOptions) => {
        return  new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  console.log(error);
                  return reject(error);
                } else {
                  console.log("Email sent: " + info.response);
    
                  return resolve(info.response);
                }
              });
        })
    }


    const promisifyUpload = req =>
    new Promise((resolve, reject) => {
      const form = new multiparty.Form();
  
      form.parse(req, function(err, fields, files) {
        if (err) return reject(err);
  
        return resolve([fields, files]);
      });
    });

    module.exports = {
        senEmail,
        createPdf,
        readAndWriteFile,
        promisifyUpload
    }