const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    handledAt: {
      type: Date,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isResolved: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
