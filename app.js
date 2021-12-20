const connectDB = require('./db/connect.js')
const express = require('express');
const app = express()
const port = 8080
const tasks = require('./routes/tasks.js')


// midddleware

app.use(express.json())
app.use(express.static('./public'))

// routes

app.use('/api/v1', tasks)

const start =  async () => {
  try {
    await connectDB()
    app.listen(port, console.log(`Server ${port} is running`))
  } catch (error) {
    console.log(error);
  }
}

start()

