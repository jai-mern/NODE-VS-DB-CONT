// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.post('/:studentId/assign-mentor/:mentorId', studentController.assignMentor);
router.get('/:studentId/mentor', studentController.getAssignedMentor);
// Add more routes as needed

module.exports = router;
