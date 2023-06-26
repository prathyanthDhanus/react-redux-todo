import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./Tododata"

export const store = configureStore({
    reducer:{
  todo:todoReducer
    }
})
