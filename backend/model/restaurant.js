const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const RestaurantSchema= new Schema({
    name: {
        type:String,
        required:true
    },
    cuisine:
    {
        type:String,
        required:true   
    },
    reviews:[{ type:String }]
  
})
const Restaurants=mongoose.model('Restaurants',RestaurantSchema);

module.exports= Restaurants;