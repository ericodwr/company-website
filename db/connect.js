const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://1234:1234@prakweb.rahm0.mongodb.net/prakWeb?retryWrites=true&w=majority'

const connectDB = () => {
  return mongoose.connect(connectionString)

}

module.exports = connectDB


