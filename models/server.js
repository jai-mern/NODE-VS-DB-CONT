// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mentorStudentDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/mentors', mentorRoutes);
app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
