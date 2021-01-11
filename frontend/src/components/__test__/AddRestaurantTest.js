import React from "react";
import ReactDOM from 'react-dom';
import AddRestaurant from './components/AddRestaurant.component';

it("renders correctly",()=>{

const div=document.createElement("div");
ReactDOM.render(<AddRestaurant></AddRestaurant>,div)
})