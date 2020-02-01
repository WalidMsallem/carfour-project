  
const express = require("express");
const router = express.Router();
const passport = require("passport");

const Draft = require("../models/draft");

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
    "/save",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    //   const { errors, isValid } = validateProfileInput(req.body);
  
      // Check Validation
    //   if (!isValid) {
        // Return any errors with 400 status
        // return res.status(400).json(errors);
    //   }
  
      // Get fields
      const draftFields = {};
      draftFields.user = req.user.id;

      if (req.body.foodDutyManagerLunch) draftFields.foodDutyManagerLunch = req.body.foodDutyManagerLunch;
      if (req.body.foodDutyManagerEvening) draftFields.foodDutyManagerEvening = req.body.foodDutyManagerEvening;
      if (req.body.nonFoodDutyLunch) draftFields.nonFoodDutyLunch = req.body.nonFoodDutyLunch;
      if (req.body.nonFoodDutyEvening) draftFields.nonFoodDutyEvening = req.body.nonFoodDutyEvening;
      if (req.body.nonFoodSemiDutyLunch) draftFields.nonFoodSemiDutyLunch = req.body.nonFoodSemiDutyLunch;
      if (req.body.nonFoodSemiDutyEvening) draftFields.nonFoodSemiDutyEvening = req.body.nonFoodSemiDutyEvening;
      if (req.body.checkoutArea) draftFields.checkoutArea = req.body.checkoutArea;
      if (req.body.foodArea) draftFields.foodArea = req.body.foodArea;
      if (req.body.nonFoodArea) draftFields.nonFoodArea = req.body.nonFoodArea;
      if (req.body.presenceOfCleaningSupervisor) draftFields.presenceOfCleaningSupervisor = req.body.presenceOfCleaningSupervisor;
      if (req.body.nubmberOfCleaningStaff) draftFields.nubmberOfCleaningStaff = req.body.nubmberOfCleaningStaff;
  
      // Skills - Spilt into array
      // if (typeof req.body.skills !== "undefined") {
      //   draftFields.skills = req.body.skills.split(",");
      // }
      Draft.findOne({ user: req.user.id }).then(draft => {
        if (draft) {
          // Update
          Draft.findOneAndUpdate(
            { user: req.user.id },
            { $set: draftFields },
            { new: true }
          ).then(draft => res.json(draft))
          .catch(err => res.json({msg :'error'}))
        } else {
          // Create
            new Draft(draftFields).save().then(draft => res.json(draft));
        }
      });
    }
  );
 // @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
    "/get",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const errors = {};
      Draft.findOne({ user: req.user._id })
        .then(draft => {
          if (!draft) {
            new Draft({ user: req.user._id }).save().then(draft => res.json(draft));

            // return res.status(404).json(errors);
          }
          res.json(draft);
        })
        .catch(err => res.status(404).json(err));
    }
  );

  module.exports = router;