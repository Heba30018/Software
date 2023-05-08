import express from "express";
import { Request, Response, Router } from "express";
import WarehouseController from "../warehouse/WarehouseController";

 class  SupervisorRouter   {
    router: Router;
    constructor() {
      this.router = Router();
      this.router.use(express.json());
    }
    routes() {
      this.router.get("/", async (req, res) => {
        res.status(200).json(await WarehouseController.display());
      });
      this.router.post("/", async (req, res) => {
        res.status(200).json(await WarehouseController.add(req));
        });
      this.router.post("/:id", async (req, res) => {
        res.status(200).json(await WarehouseController.delete(parseInt(req.params.id)));
        });
      this.router.put("/:id", async (req, res) => {
        res.status(200).json(await WarehouseController.update(parseInt(req.params.id),req));
      })
      return this.router;
    }
 
}

export default new SupervisorRouter();