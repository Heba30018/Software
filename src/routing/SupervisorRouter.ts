import express from "express";
import { Request, Response, Router } from "express";
import SupervisorController from "../supervisor/SupervisorController";

 class  SupervisorRouter   {
    router: Router;
    constructor() {
      this.router = Router();
      this.router.use(express.json());
    }
    routes() {
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
 
}

export default new SupervisorRouter();