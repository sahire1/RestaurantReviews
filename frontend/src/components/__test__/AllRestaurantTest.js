import React from "react";
import {render,fireEvent} from "@testing-library/react";
import AllRestaurant from './components/AllRestaurant.component';

it("renders correctly",()=>{

    const {queryByTestId,queryByPlaceholderText}= render(<AllRestaurant/>)
    expect(queryByPlaceholderText('')).toBeTruthy()


})