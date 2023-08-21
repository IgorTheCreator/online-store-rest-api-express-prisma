import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server working on ${port}`);
});
