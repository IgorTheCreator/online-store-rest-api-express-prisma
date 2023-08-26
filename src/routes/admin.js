import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

router.get('/');
router.delete('/:productId');

router.get('/edit/:productId');
router.post('/edit/:productId');

router.get('/add', adminController.getAddProduct);
router.post('/add', adminController.postAddProduct);

export default router;
