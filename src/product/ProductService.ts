import ProductRepository from './ProductRepository';

import "reflect-metadata"
import {autoInjectable} from 'tsyringe'

@autoInjectable()
export default class ProductService {
    ProductRepository: ProductRepository;
    constructor(productRepository: ProductRepository) {
        this.ProductRepository = productRepository;
}
    async getProduct(){
        const result = await this.ProductRepository.getProduct()
        return result;
    }
    async addProduct(req: Request){
         const result =await this.ProductRepository.addProduct(req)
         return result;
    }
    async deleteProduct(id: number){
        const result =await this.ProductRepository.deleteProduct(id)
        return result;
   }
   async updateProduct(id: number,req: Request){
    return await this.ProductRepository.updateProduct(id,req);
}
}