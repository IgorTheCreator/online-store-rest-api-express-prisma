import express from 'express';

const router = express.Router();

router.get('/');
router.get('/:productId');

export default router;
