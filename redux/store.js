import { configureStore } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import users from "./slices/PaginasGenerales/PoliticasSlice"


const store = configureStore({
    reducer: {
        users
    }
})


export const wrapper = createWrapper(() => store, { debug: true })