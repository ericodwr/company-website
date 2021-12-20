const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, `Input name`],
    trim:true
  }
    , code: {
      type: String,
      required : [true, 'Input Code'],
      trim: true
    }
})

module.exports = mongoose.model('Task', taskSchema)