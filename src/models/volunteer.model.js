const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    interest: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Volunteer", VolunteerSchema);
