import {configureStore} from "@reduxjs/toolkit"
import blogReducer from "./blogSlice"


// The central store for my app//
const store = configureStore({
    reducer: {
        blog: blogReducer,
    }
})
;
export default store;