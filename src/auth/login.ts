// import { Request, Response } from 'express';
// import session, { Session } from 'express-session';
// import db from '../config/db';
// import WarehouseController from '../warehouse/WarehouseController';

// interface CustomSession extends Session {
//   user_id?: number;
//   warehouse_id?: number;
// }

// class Login {
//   static async loginUser(req: Request, res: Response, next: any) {
//     const email = req.body.email;
//     const password = req.body.password;

//     if (email && password) {
//       db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], async function (err, data) {
//         console.log(data[0].id)
//         if (data.length > 0) {
//           const session = req.session as CustomSession;
//           session.user_id = data[0].id;
//           if (data[0].type == 'admin') {
//             res.send({ message: 'login successful Admin', session });
//           } else {
//             let warehouse_id =await WarehouseController.getWarehouseId(data[0].id)
//             session.warehouse_id = parseInt(warehouse_id as string);
//             res.send({ message: 'login successful Supervisor', session });
//           }
//         } else {
//           res.send({ message: 'Incorrect email or password' });
//         }
//       });
//     } else {
//       res.send({ message: 'please enter your email and password' });
//       res.end();
//     }
//   }
// }

// export default Login;