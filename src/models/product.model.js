const {Schema, model, models} = require('mongoose')

const productSchema = new Schema({ 
    category:String,
    price:Number,
    image:String,
    description:String,
    quantity:Number,
}, {
    timestamps: true,
    versionKey: false,
})


module.exports = model('Product', productSchema)
