import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import axios from "axios"





// api call -createAsyncThunk
export const fetchRestaurant=createAsyncThunk('restaurantList/fetchResturants',()=>{
    // api call
    return axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const restutantSlice=createSlice({
    name:'restaurantlist',
    initialState:{
        loading:false,
        allRestaurant:[],
        allRestaurantContainer:[],
        error:''
    },
    reducers:{
        searchrestaurant:(state,action)=>{
            state.allRestaurant=state.allRestaurantContainer.filter(items=>items.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    
    
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestaurant=action.payload
            state.allRestaurantContainer=action.payload
            state.error=""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false
            state.allRestaurant=[]
            state.error=action.error.message
        })
    }
})



export const {searchrestaurant}=restutantSlice.actions
export default restutantSlice.reducer