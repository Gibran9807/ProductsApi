
const productCtrl = require('../controllers/product.controller')

const routes = [
    {
        method:'GET',
        url:'/products',
        handler:productCtrl.getProducts,
        
    },
    {
        method:'GET',
        url:'/products/:id',
        handler:productCtrl.getOneProduct,
    },
    {
        method:'POST',
        url:'/products',
        handler:productCtrl.postProduct,
        
    },
    {
        method:'DELETE',
        url:'/products/:id',
        handler:productCtrl.deleteProduct,
    },
    {
        method:'PUT',
        url:'/products/:id',
        handler:productCtrl.putProduct,
    }
]

module.exports = routes