import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    users:[]
}    

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
            add:(state,action)=>{
                state.users = [...state.users,{id : action.payload.id, name : action.payload.name}]
            },
            remove:(state,action)=>{
                    state.users = state.users.filter(e => e.id!==action.payload)
            },
            edit:(state,action)=>{
                    
            },

    }
})



export const {add,remove,edit} = userSlice.actions

export default userSlice.reducer