const express = require("express");
const router = express.Router();
const fs = require("fs");
const templete = require('../../templete.js');
const passport = require("passport");
const moment = require ('moment')
const {readAndWriteFile ,createPdf ,senEmail ,promisifyUpload} =require('./pdf.helper');

const ceckOutAreaImagesImagesLabel = 'ceckOutAreaImagesImages'
const foodAreaImagesLabel = 'foodAreaImages'
const presenceOfCleaningSupervisorImagesLabel = 'presenceOfCleaningSupervisorImages'
const presentOfFoodDutyManagerEveningTime3ImagesLabel = 'presentOfFoodDutyManagerEveningTime3Images'
var options = { format: "A4" };


var test = {
    name: "walid",
    email: "walidmsallem@gmail.com",
    // name: "Khalil",
    // email: "K2thend@gmail.com" 
    // name: "ghazi",
    // email: "mensighazi1992@gmail.com",
  };
  
  
router.post('/send',passport.authenticate("jwt", { session: false }),
                    async function(request, response) {

  const {user} = request
  const fullName = `${user.name} ${user.lastName}`

    const date =  moment( new Date ()).format('LLL')

    // start api
    var listceckOutAreaImagesLink = []
    var listceckOutAreaImagesPath = []
    
    var listfoodAreaImagesLink = []
    var listfoodAreaImagesPath = []

    var listpresenceOfCleaningSupervisorImagesLink = []
    var listpresenceOfCleaningSupervisorImagesPath = []

    var listpresentOfFoodDutyManagerEveningTime3ImagesLink = []
    var listpresentOfFoodDutyManagerEveningTime3ImagesPath = []

    try {
        // upload images
      const [fields, files] = await promisifyUpload(request);
 console.log('fields' ,fields )
      var {ceckOutAreaImagesImages ,foodAreaImages , presenceOfCleaningSupervisorImages,presentOfFoodDutyManagerEveningTime3Images} = files;
     


      if (ceckOutAreaImagesImages) {
        for (var i = 0; i < ceckOutAreaImagesImages.length; i++) {
            var newPath = "./uploads/" + user.name +"__" + ceckOutAreaImagesImagesLabel + "_"+ i + "_";
            var singleImg = ceckOutAreaImagesImages[i];
            newPath += singleImg.originalFilename;
            let [imageLink,imagePath] =  await readAndWriteFile(singleImg, newPath);
            listceckOutAreaImagesLink.push(imageLink);
            listceckOutAreaImagesPath.push(imagePath);
          }
      }
      if (foodAreaImages) {
        for (var i = 0; i < foodAreaImages.length; i++) {
            var newPath = "./uploads/" + user.name +"__"+ foodAreaImagesLabel + "_" + i + "_";
            var singleImg = foodAreaImages[i];
            newPath += singleImg.originalFilename;
            let [imageLink,imagePath] =  await readAndWriteFile(singleImg, newPath);
            listfoodAreaImagesLink.push(imageLink);
            listfoodAreaImagesPath.push(imagePath);
          }
      }
      if (presenceOfCleaningSupervisorImages) {
        for (var i = 0; i < presenceOfCleaningSupervisorImages.length; i++) {
            var newPath = "./uploads/" + user.name + "__" + presenceOfCleaningSupervisorImagesLabel +"_"+ i + "_" ;
            var singleImg = presenceOfCleaningSupervisorImages[i];
            newPath += singleImg.originalFilename;
            let [imageLink,imagePath] =  await readAndWriteFile(singleImg, newPath);
            listpresenceOfCleaningSupervisorImagesLink.push(imageLink);
            listpresenceOfCleaningSupervisorImagesPath.push(imagePath);
          }
      }
      if (presentOfFoodDutyManagerEveningTime3Images) {
        for (var i = 0; i < presentOfFoodDutyManagerEveningTime3Images.length; i++) {
            var newPath = "./uploads/" + user.name + "__" + presentOfFoodDutyManagerEveningTime3ImagesLabel + "_"+ i + "_";
            var singleImg = presentOfFoodDutyManagerEveningTime3Images[i];
            newPath += singleImg.originalFilename;
            let [imageLink,imagePath] =  await readAndWriteFile(singleImg, newPath);
            listpresentOfFoodDutyManagerEveningTime3ImagesLink.push(imageLink);
            listpresentOfFoodDutyManagerEveningTime3ImagesPath.push(imagePath);
          }
      }


   // end of upload
  let html = templete({...fields ,
      date,
      fullName,
       listceckOutAreaImagesLink ,
       listfoodAreaImagesLink , 
       listpresenceOfCleaningSupervisorImagesLink,
       listpresentOfFoodDutyManagerEveningTime3ImagesLink
    })

   // end of  create ejs template
      const pdfBuffer = await createPdf (html, options)

      var mailOptions = {
        // from: "gomycode.project@gmail.com",
        from: user.email,
        to: test.email,
        subject: `Daily report from ${fullName}`,
        html: `<div>
        <h1>Daily report from ${fullName}</h1>
        <div>${fullName}</div>
        <div>${user.email} </div>
        </div>`,
        attachments: [
          {
            filename: "rapport.pdf",
            content: pdfBuffer
          }
        ]
      };
  
  
    const info = await senEmail (mailOptions)

    listceckOutAreaImagesPath.map(element=> {
       fs.unlinkSync(element)
    })
    listfoodAreaImagesPath.map(element=> {
        fs.unlinkSync(element)
     })
     listpresenceOfCleaningSupervisorImagesPath.map(element=> {
        fs.unlinkSync(element)
     })
     listpresentOfFoodDutyManagerEveningTime3ImagesPath.map(element=> {
        fs.unlinkSync(element)
     })
    response.json(`succes   ${info}  `);


    } catch (err) {
        response.json(`errror
      ${err}`);
    }
    // upload
})

module.exports = router;