import { configureStore } from "@reduxjs/toolkit"
import userDetails from "../features/userDataSlice"

export const store = configureStore({
    reducer: {
        app: userDetails
    }
})