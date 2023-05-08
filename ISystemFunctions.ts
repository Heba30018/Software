import db from './src/config/db'
import { Request, Response, Router } from "express";

// class SystemFunctions {
//   add(req: Request, res: Response) {}
//   update(req: Request, res: Response) {}
//   delete(req: Request, res: Response) {}
//   display(req: Request, res: Response) {}

//   // static async getWarehouseId(supervisor_id: number) {
//   //   return new Promise((resolve) => {
//   //     db.query(
//   //       "select warehouse_id from warehouses where supervisor_id = ?",
//   //       [supervisor_id],
//   //       (error, result) => {
//   //         if (!error) {
//   //           resolve(result[0].warehouse_id);
//   //         }
//   //       }
//   //     );
//   //   });
//   // }
// }
interface ISystemFunctions {
  add(req: Request): void ;
  update(id:number,req: Request):void;
  delete(id:number): void;
  display(): void;
}

export default ISystemFunctions;