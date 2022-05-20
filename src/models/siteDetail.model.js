const mongoose = require('mongoose');

const SiteDetailSchema = new mongoose.Schema(
  {
    about: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    facebookLink: {
      type: String,
      required: true
    },
    twitterLink: {
      type: String,
      required: true
    },
    instagramLink: {
      type: String,
      required: true
    },
    developerLink: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('SiteDetail', SiteDetailSchema);
