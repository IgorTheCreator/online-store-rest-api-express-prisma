import express from 'express';

const router = express.Router();

router.get('/');

router.get('/edit');
router.post('/edit');

router.get('/add');
router.post('/add');

export default router;
