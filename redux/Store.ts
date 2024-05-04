import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ConversationSlice from "./reducers/ConversationSlice";


const rootReducer = combineReducers({
    ConversationSlice: ConversationSlice
});


const Store = configureStore({
    reducer: rootReducer,
    devTools: true
});



export type AppDispatch  = typeof Store.dispatch;
export type RootType = ReturnType<typeof Store.getState>;
export default Store;



