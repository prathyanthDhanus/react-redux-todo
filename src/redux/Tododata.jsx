import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    data:[]
}    

export const userSlice = createSlice({
    name:'use',
    initialState,
    reducers:{
        //----------adding actions (Create)-----------

            add:(state,action)=>{
                state.data = [...state.data,{id:Date.now(), name: action.payload.name}]
               
            },

        //-----------deleting actions (Delete)-----------

            remove:(state,action)=>{
                const id = action.payload.id;// Extract the 'id' from the action payload
                    state.data = state.data.filter((e)=> e.id!==id)
             
            },

         //-------------updating actions (Update)------------   

            edit:(state,action)=>{
                
                const { id, name } = action.payload;
                state.data = state.data.map((e) => {
                  if (e.id == id) {
                    return { ...e, name };
                  }
                  return e;
                });
            },

    }
})



export const {add,remove,edit} = userSlice.actions

export default userSlice.reducer