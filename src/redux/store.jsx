import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Tododata"

export const store = configureStore({
    reducer:{
  todo:userReducer
    }
})
