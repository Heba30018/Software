import db from '../config/db'

export default class ProductRepository{


    async getProduct(){
        return new Promise((resolve, reject) => {
           db.query("select * FROM `products`", [], (error, result) => {
            if (!error) {
              resolve(result)
            } else {
              console.log("Error");
              reject(error)
            }
          }) 
        })
        
        
    }
    async addProduct(req: Request) {
      const arr = Object.values(req);
      return new Promise((resolve, reject) => {
        db.query(
          'INSERT INTO products (name, description, stock) VALUES (?, ?, ?)',
          [arr[0], arr[1], arr[2]],
          (error, result) => {
            if (!error) {
              resolve("Successfully added")
            } else {
              reject("Failed to add product")
            }
          }
        );
     })
      
    }
    async deleteProduct(id: number){
      return new Promise((resolve, reject) => {
        db.query("DELETE FROM product_warehouse WHERE ?",{product_id:id},(err,result)=>{
          if(!err){
              db.query("delete from products where ?",{product_id:id},(error,result)=>{
                  if(!error){
                      resolve('deleting successfuly')
                  }
                  else{
                      resolve('failed to delete')
                  }
          })
          }
          else{
              console.log("error")
          }
         
      }
      )
      })
      
      
  }
  async updateProduct(id:number,req: Request) {
    const arr = Object.values(req);
    return new Promise((resolve, reject) => {
      db.query("UPDATE products SET? WHERE product_id = ?"
      ,[{name:arr[0],description:arr[1],stock:arr[2]},id],(error,result)=>{
      if(!error){
          resolve("Update Successfully")
      }
      else{
          resolve("Failed to update")
      }
})
   })
    
  }

}