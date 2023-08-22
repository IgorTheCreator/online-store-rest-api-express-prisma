import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';
import path from 'node:path';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.set('views', path.resolve('src', 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(router);

app.listen(port, () => {
  console.log(`Server working on ${port}`);
});
