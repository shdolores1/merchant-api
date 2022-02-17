import * as express from 'express';
import { Product } from '../models/product';


export function getAllProducts(req: express.Request, res: express.Response) {
	Product.find({ isDeleted: false }, (err: any, products: any) => {
		if (err) {
			res.send(err);
		} else {
			res.send(products);
		}
	});
};

export function getProductByID(req: express.Request, res: express.Response) {
	Product.findById({ _id: req.params.id, isDeleted: false }, (err: any, product: any) => {
		if (err) {
			res.send(err);
		} else {
			res.send(product);
		}
	});
};

export function createProduct(req: express.Request, res: express.Response) {
	let product = new Product(req.body);
	product.isDeleted = false;
	product.save((err: any, product: any) => {
		if (err) {
			res.send(err);
		} else {
			res.send(product);
		}
	});
};

export function updateProduct(req: express.Request, res: express.Response) {
	let id = req.params.id;
	Product.findOneAndUpdate({ _id: id }, req.body, { returnDocument: 'after' }, (err: any, updatedProduct: any) => {
		if (err) {
			res.send(err);
		} else {
			res.send(updatedProduct);
		}
	});
};

export function deleteProduct(req: express.Request, res: express.Response) {
	let id = req.params.id;
	Product.findOneAndDelete({ _id: id }, req.body, (err: any, deletedProduct: any) => {
		if (err) {
			res.send(err);
		} else {
			res.send(deletedProduct);
		}
	});
};