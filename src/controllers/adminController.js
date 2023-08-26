import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class AdminController {
  getAddProduct(req, res) {
    res.render('pages/add-product', {
      title: 'Add Product',
    });
  }

  postAddProduct(req, res) {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    async function main() {
      await prisma.products.create({
        data: {
          name: name,
          imageUrl: imageUrl,
          price: +price,
          description: description,
        },
      });
    }

    main()
      .then(async () => {
        res.redirect('/admin/add');
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
}

export default new AdminController();
