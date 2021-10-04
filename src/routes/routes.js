import { addnewProduct, deleteProduct, getProducts, getProductWithID, updateProduct } from "../controllers/controllers";

const routes = (app) =>{
    app.route('/products').post(addnewProduct);
    app.route('/products').get(getProducts);
    app.route('/products/:ProductID')
    .get(getProductWithID) ;
    app.route('/products/:ProductID').put(updateProduct);
    app.route('/products/:Product').delete(deleteProduct);
    
}


export default routes;