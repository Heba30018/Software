import ISystemFunctions from "../../ISystemFunctions";
import db from '../config/db'
import { Request, Response, Router } from "express";
import express from "express";

 class WarehouseController  implements ISystemFunctions {
  router: Router;
  constructor() {
    this.router = Router();
    this.router.use(express.json());
  }
  async add(req: Request){
    const arr = Object.values(req.body);
    try {
      return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO warehouses (name, location, supervisor_id) VALUES (?, ?, ?)",
            [arr[0], arr[1], arr[2]],
          (error, result) => {
            if (!error) {
              resolve("Successfully added")
            } else {
              console.log("Reject")
              reject("Failed to add Warehouse")
            }
          }
        );
      });
    } catch (error) {
      console.error(`SupervisorController.add - Error: ${error}`);
      throw error;
    }
  }
  async update(id: number,req:Request){
    const arr = Object.values(req.body);
    try {
      return new Promise((resolve, reject) => {
        db.query(
            "UPDATE warehouses SET? WHERE 	warehouse_id  = ?"
            ,[{name:arr[0],location:arr[1],supervisor_id:arr[2]},id],
          (error, result) => {
            if (!error) {
              resolve("Successfully updated")
            } else {
              console.log("Reject")
              reject("Failed to update Warehouse")
            }
          }
        );
      });
    } catch (error) {
      console.error(`SupervisorController.add - Error: ${error}`);
      throw error;
    }
  }
  async delete(id:number) {
    return new Promise((resolve, reject) => {
      db.query("delete from warehouses where ?",{warehouse_id:id},(err,result)=>{
        if(!err){
           resolve("Successfully deleted")
        }
        else{
            reject("Error deleting")
        }
       
    }
    )
    })
  }
  async display() {
    return new Promise((resolve, reject) => {
      db.query("select * FROM `warehouses`",[],(error, result) => {
       if (!error) {
         resolve(result)
       } else {
         console.log("Error");
         reject(error)
       }
     }) 
   })
   
  }
   async getWarehouseId(supervisor_id: number) {
    return new Promise((resolve) => {
      db.query(
        "select warehouse_id from warehouses where supervisor_id = ?",
        [supervisor_id],
        (error, result) => {
          if (!error) {
            resolve(result[0].warehouse_id);
          }
        }
      );
   });
  }

}

export default new WarehouseController();