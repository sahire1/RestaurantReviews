const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose'); 



const app=express();
const port= 5000;

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {useNewUrlParser: true, useCreateIndex:true}); //mongodb nodejs to parse connection then new version of url parser

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb connected");
})


const RestaurantRouter=require('./routes/restaurant');
app.use('',RestaurantRouter);

app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`);
})