import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import { app } from './app.js';

const main = async () =>
  await mongoose
    .connect(process.env.DATABASE_HOST)
    .then(console.log('Connected to database'));
main().catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
