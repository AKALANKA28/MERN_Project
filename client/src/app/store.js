import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/user/userSlice"
import productsReducer from "../features/products/productSlice"
import contactReducer from "../features/contact/contactSlice"
import salesReducer from "../components/finance/body/Sales/salesSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productsReducer,
        contact: contactReducer,
        sales: salesReducer

    }
})