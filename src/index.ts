import 'reflect-metadata';
import express from "express";
import {container} from 'tsyringe';

import ProductController from "./product/ProductController";
import SupervisorRouter from "./routing/SupervisorRouter"
import WarehouseRouter from './routing/WarehouseRouter';

const app = express();
const bodyParser = require('body-parser');




app.use(express.json());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const productController = container.resolve(ProductController);

app.use("/products", productController.routes());
app.use("/supervisor",SupervisorRouter.routes());
app.use("/warehouse",WarehouseRouter.routes());
app.listen(9000, () => {
  console.log("Server listening on port 9000");
});