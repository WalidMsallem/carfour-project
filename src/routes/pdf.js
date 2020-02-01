const express = require("express");
const router = express.Router();
const fs = require("fs");
const templete = require('../../templete.js');
const passport = require("passport");
const moment = require ('moment');
const Draft = require("../models/draft");

const {readAndWriteFile ,createPdf ,senEmail ,promisifyUpload} =require('./pdf.helper');

const checkoutAreaImagesLabel = 'checkoutAreaImages'
const foodAreaImagesLabel = 'foodAreaImages'
const nonFoodAreaImagesLabel = 'nonFoodAreaImages'
const presenceOfCleaningSupervisorImagesLabel = 'presenceOfCleaningSupervisorImages'
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
    var listOfCheckoutAreaImagesLink  = []
    var listOfCeckOutAreaImagesPath = []
    
    var listfoodAreaImagesLink = []
    var listfoodAreaImagesPath = []

    var listOfNonFoodAreaImagesLink = []
    var listOfNonFoodAreaImagesPath = []

    var listOfPresenceOfCleaningSupervisorImagesLink = []
    var listOfPresenceOfCleaningSupervisorImagesPath = []

    try {
        // upload images
      const [fields, files] = await promisifyUpload(request);

      var {checkoutAreaImages ,
           foodAreaImages ,
            nonFoodAreaImages,
            presenceOfCleaningSupervisorImages} = files;
     


      if (checkoutAreaImages) {
        for (var i = 0; i < checkoutAreaImages.length; i++) {
            var newPath = "./uploads/" + user.name +"__" + checkoutAreaImagesLabel + "_"+ i + "_";
            var singleImg = checkoutAreaImages[i];
            newPath += singleImg.originalFilename;
            let [imageLink,imagePath] =  await readAndWriteFile(singleImg, newPath);
            listOfCheckoutAreaImagesLink.push(imageLink);
            listOfCeckOutAreaImagesPath.push(imagePath);
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
      if (nonFoodAreaImages) {
        for (var i = 0; i < nonFoodAreaImages.length; i++) {
            var newPath = "./uploads/" + user.name + "__" + nonFoodAreaImagesLabel +"_"+ i + "_" ;
            var singleImg = nonFoodAreaImages[i];
            newPath += singleImg.originalFilename;
            let [imageLink,imagePath] =  await readAndWriteFile(singleImg, newPath);
            listOfNonFoodAreaImagesLink.push(imageLink);
            listOfNonFoodAreaImagesPath.push(imagePath);
          }
      }
      if (presenceOfCleaningSupervisorImages) {
        for (var i = 0; i < presenceOfCleaningSupervisorImages.length; i++) {
            var newPath = "./uploads/" + user.name + "__" + presenceOfCleaningSupervisorImagesLabel + "_"+ i + "_";
            var singleImg = presenceOfCleaningSupervisorImages[i];
            newPath += singleImg.originalFilename;
            let [imageLink,imagePath] =  await readAndWriteFile(singleImg, newPath);
            listOfPresenceOfCleaningSupervisorImagesLink.push(imageLink);
            listOfPresenceOfCleaningSupervisorImagesPath.push(imagePath);
          }
      }

   console.log('list' ,listOfCheckoutAreaImagesLink )   
   // end of upload
  let html = templete({...fields ,
      date,
      fullName,
       listOfCheckoutAreaImagesLink ,
       listfoodAreaImagesLink , 
       listOfNonFoodAreaImagesLink,
       listOfPresenceOfCleaningSupervisorImagesLink
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

    listOfCeckOutAreaImagesPath.map(element=> {
       fs.unlinkSync(element)
    })
    listfoodAreaImagesPath.map(element=> {
        fs.unlinkSync(element)
     })
     listOfNonFoodAreaImagesPath.map(element=> {
        fs.unlinkSync(element)
     })
     listOfPresenceOfCleaningSupervisorImagesPath.map(element=> {
        fs.unlinkSync(element)
     })
    // response.json(`succes   ${info}`);*
   const resetDraftFields = { }

      resetDraftFields.foodDutyManagerLunch = null
      resetDraftFields.foodDutyManagerEvening = null
      resetDraftFields.nonFoodDutyLunch = null
      resetDraftFields.nonFoodDutyEvening = null
      resetDraftFields.nonFoodSemiDutyLunch = null
      resetDraftFields.nonFoodSemiDutyEvening = null
      resetDraftFields.checkoutArea = null
      resetDraftFields.foodArea = null
      resetDraftFields.nonFoodArea = null
      resetDraftFields.presenceOfCleaningSupervisor = null
      resetDraftFields.nubmberOfCleaningStaff = null 
      resetDraftFields.user =  request.user.id  

       Draft.findOneAndUpdate(
      { user: request.user.id },
      { $set: resetDraftFields },
      { new: true }
    ).then(draft => response.json(draft))
    // .catch(err => response.json({msg :'error delete'}))
    } catch (err) {
        response.status(400).json(err);
    }
    // upload
})

module.exports = router;