// routes/mentorRoutes.js
const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.post('/', mentorController.createMentor);
router.post('/:mentorId/students', mentorController.addStudentsToMentor);
router.get('/:mentorId/students', mentorController.getStudentsByMentor);
// Add more routes as needed

module.exports = router;
