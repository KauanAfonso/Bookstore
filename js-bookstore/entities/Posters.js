const Product = require("./Produtc");

module.exports = class Poster extends Product{
    constructor(name,description,height,width,price,inStock){
        super(name,description,price,inStock)
        this.height
        this.width
    }
}