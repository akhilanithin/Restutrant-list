import { configureStore } from "@reduxjs/toolkit";
import restutantSlice from "./restaurantSlice";


const store=configureStore({
    reducer:{
        restutantSlice
    }
})
export default store