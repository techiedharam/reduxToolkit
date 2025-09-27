import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";

// action 
export const fetchProducts = createAsyncThunk('fetchProducts' ,async()=> {
        const res = await fetch('https://dummyjson.com/products')
        return res.json()
})

const productSlice = createSlice({
    name: 'product',
    initialState : {
        data : null ,
        isLoading : false , 
        isError : false,
    },
    extraReducers :(builder) =>{
        builder.addCase(fetchProducts.pending ,(state ,actions)=> {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled , (state ,actions)=> {
                state.isLoading = false ,
                state.data = actions.payload
        })
        builder.addCase(fetchProducts.rejected ,(state , actions)=> {
            state.isError = true , 
            console.log("Error" , actions.payload)
        })
    }
})

// export const {  } = productSlice.actions;
export default productSlice.reducer;