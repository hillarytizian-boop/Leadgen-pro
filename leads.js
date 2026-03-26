const express = require('express');
const router = express.Router();
const { generateLeads, saveLead, getSavedLeads, exportCSV } = require('../controllers/leadController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/generate', authMiddleware, generateLeads);
router.post('/save', authMiddleware, saveLead);
router.get('/saved', authMiddleware, getSavedLeads);
router.get('/export', authMiddleware, exportCSV);

module.exports = router;