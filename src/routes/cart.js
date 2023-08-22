import express from 'express';

const router = express.Router();

const products = [
  {
    id: 1,
    name: 'clothe1',
    imageUrl:
      'https://www.rollingstone.com/wp-content/uploads/2023/07/GettyImages-1406493734.jpg',
    price: 500,
    description: 'wer',
  },
  {
    id: 1,
    name: 'clothe2',
    imageUrl:
      'https://www.rollingstone.com/wp-content/uploads/2023/07/GettyImages-1406493734.jpg',
    price: 400,
    description: 'wer',
  },
];

router.get('/', (req, res) => {
  res.render('pages/cart', {
    title: 'Cart',
    products: products,
  });
});
router.post('/');
router.delete('/:productId');

export default router;
