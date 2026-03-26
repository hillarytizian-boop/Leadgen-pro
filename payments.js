const express = require('express');
const router = express.Router();
const { submitPayment, getPayments } = require('../controllers/paymentController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/submit', authMiddleware, submitPayment);
router.get('/', authMiddleware, getPayments);

module.exports = router;