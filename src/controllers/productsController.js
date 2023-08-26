import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ProductsController {
  getProducts(req, res) {
    async function main() {
      const products = await prisma.products.findMany();
      return products;
    }

    main()
      .then((products) => {
        res.render('pages/products', {
          title: 'Products',
          products: products,
        });
      })
      .catch(async (err) => {
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
}

export default new ProductsController();
