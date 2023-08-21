import express from 'express';
import cartRouter from './cart.js';
import ordersRouter from './orders.js';
import productsRouter from './products.js';
import authRouter from './auth.js';
import adminRouter from './admin.js';

const router = express.Router();

router.use('/cart', cartRouter);
router.use('/orders', ordersRouter);
router.use('/products', productsRouter);
router.use('/auth', authRouter);
router.use('/admin', adminRouter);

export default router;
