import User from "./User";
import { Request, Response, Router } from "express";
import express from 'express';
import SupervisorController from "../supervisor/SupervisorController";
import WarehouseController from "../warehouse/WarehouseController";
class Admin extends User {

  router: Router;
constructor(){
    super('admin@gmail.com','123','012343','admin');
    this.router = Router();
    this.router.use(express.json());
  
}
    
  SupervisorRoutes() {
    this.router.get("/", async (req, res) => {
      res.status(200).json(await SupervisorController.display());
    });
    this.router.post("/", async (req, res) => {
      res.status(200).json(await SupervisorController.add(req));
      });
    this.router.post("/:id", async (req, res) => {
      res.status(200).json(await SupervisorController.delete(parseInt(req.params.id)));
      });
    this.router.put("/:id", async (req, res) => {
      res.status(200).json(await SupervisorController.update(parseInt(req.params.id),req));
    })
    return this.router;
  }
  WarehouseRoutes() {
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

export default new Admin();