import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/add-product', {
    title: 'Add Product',
  });
});
router.post('/');

export default router;
