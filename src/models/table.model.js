const mongoose = require('mongoose');

const tableReservationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    occation: {
      type: String,
      enum: ['wedding', 'birthday', 'other'],
      required: true
    },
    handledAt: {
      type: Date,
      required: true
    },
    message: {
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

module.exports = mongoose.model('Table', tableReservationSchema);
