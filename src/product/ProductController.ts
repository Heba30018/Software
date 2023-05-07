import { Request, Response, Router } from "express";
import "reflect-metadata";
import { autoInjectable } from "tsyringe";
import ProductService from "./ProductService";
import express from "express";

@autoInjectable()
export default class ProductController {
  ProductService: ProductService;
  router: Router;

  constructor(productService: ProductService) {
    this.ProductService = productService;
    this.router = Router();
    this.router.use(express.json());
  }

  async getProductRoute() {
    try {
      const products = await this.ProductService.getProduct();
      return products;
    } catch (error) {
      console.error(`ProductController.getProduct - Error: ${error}`);
      throw error;
    }
  }
  async createProductRoute(req: Request, res: Response) {
    try {
      const result = await this.ProductService.createProduct(req.body);
      return result;
    } catch (error) {
      console.error(`ProductController.createProduct - Error: ${error}`);
      throw error;
    }
  }
  async deleteProduct(id: number){
    try {
      const result = await this.ProductService.deleteProduct(id);
      return result;
    } catch (error) {
      console.error(`ProductController.getProduct - Error: ${error}`);
      throw error;
    }
  }
  async updateProduct(id: number,req:Request){
    try {
      return await this.ProductService.updateProduct(id,req.body);
    } catch (error) {
      console.error(`ProductController.createProduct - Error: ${error}`);
      throw error;
    }

  }

  routes() {
    this.router.get("/", async (req, res) => {
      res.status(200).json(await this.getProductRoute());
    });
    this.router.post("/", async (req, res) => {
      res.status(200).json(await this.createProductRoute(req, res));
      });
    this.router.post("/:id", async (req, res) => {
      res.status(200).json(await this.deleteProduct(parseInt(req.params.id)));
      });
    this.router.put("/:id", async (req, res) => {
      res.status(200).json(await this.updateProduct(parseInt(req.params.id),req));
    })
    return this.router;
  }
}