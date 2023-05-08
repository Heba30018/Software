import ISystemFunctions from "../../ISystemFunctions";
import db from '../config/db'
import { Request, Response, Router } from "express";
import express from "express";

 class SupervisorController  implements ISystemFunctions {
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
          "INSERT INTO users (email, password, phone, type) VALUES (?, ?, ?, ?)",
          [arr[0], arr[1], arr[2], arr[3]],
          (error, result) => {
            if (!error) {
              resolve("Successfully added")
            } else {
              console.log("Reject")
              reject("Failed to add Supervisor")
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
          "UPDATE users SET? WHERE id = ?"
       ,[{email:arr[0],password:arr[1],phone:arr[2],type:arr[3]},id],
          (error, result) => {
            if (!error) {
              resolve("Successfully updated")
            } else {
              console.log("Reject")
              reject("Failed to update Supervisor")
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
      db.query("delete from users where ?",{id:id},(err,result)=>{
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
      db.query("select * FROM `users` WHERE id != 1",[],(error, result) => {
       if (!error) {
         resolve(result)
       } else {
         console.log("Error");
         reject(error)
       }
     }) 
   })
   
  }

}

export default new SupervisorController();