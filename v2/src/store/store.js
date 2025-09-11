import { configureStore } from "@reduxjs/toolkit";
import  reposReducer  from "./reposSlice";

export default configureStore({
    reducer: {
        repos: reposReducer
    }
})