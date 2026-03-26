const express = require('express');
const router = express.Router();
const { getAllPayments, approvePayment, rejectPayment } = require('../controllers/adminController');
const { adminMiddleware } = require('../middleware/adminMiddleware');

router.get('/payments', adminMiddleware, getAllPayments);
router.post('/approve/:id', adminMiddleware, approvePayment);
router.post('/reject/:id', adminMiddleware, rejectPayment);

module.exports = router;