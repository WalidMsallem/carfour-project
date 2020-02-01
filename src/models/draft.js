const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const DraftSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
  foodDutyManagerLunch: {
    type: String,
  }, 
  foodDutyManagerEvening: {
    type: String,
  }, 
  nonFoodDutyLunch: {
    type: String,
  }, 
  nonFoodDutyEvening: {
    type: String,
  },
  nonFoodSemiDutyLunch: {
    type: String,
  },
  nonFoodSemiDutyEvening: {
    type: String,
  },
  checkoutArea: {
    type: String,
  },
  foodArea: {
    type: String,
  },
  nonFoodArea: {
    type: String,
  },
  presenceOfCleaningSupervisor: {
    type: String,
  },
  nubmberOfCleaningStaff: {
    type: String,
  },
});

module.exports = draft = mongoose.model("draft", DraftSchema);