import { productRouter } from './src/routes/product';
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const DATABASE_URL =
	'mongodb+srv://admin:admin@public-cluster.iqk6u.mongodb.net/merchant-app';
const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Server started listening on port ` + PORT)
});

app.use(express.json());
app.use(cors());
app.use(productRouter);

mongoose.connect(DATABASE_URL).then(() => {
	console.log('Successfully connected to the Database')
}).catch((err: any) => {
	console.log(`Connecting to the Database failed: ` + err.message)
})