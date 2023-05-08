import User from './User';

import ProductRepository from '../product/ProductRepository';

class Supervisor extends User {
    async getProductInWarehouse(){
       return new ProductRepository().getProduct()
    }
}

export default new Supervisor();