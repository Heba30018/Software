import 'reflect-metadata';
import express from "express";
import {container} from 'tsyringe';



import Admin from './users/admin'
import ProductController from "./product/ProductController";
import supervisor from './users/supervisor';

const app = express();
const bodyParser = require('body-parser');




app.use(express.json());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const productController = container.resolve(ProductController);

app.use("/products", productController.routes());
app.use("/supervisor",Admin.SupervisorRoutes());
app.use("/warehouse",Admin.WarehouseRoutes());

app.use("/supervisor/products",async (req, res) => {
  res.status(200).json(await supervisor.getProductInWarehouse());
})

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});