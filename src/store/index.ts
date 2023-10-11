import { configureStore } from "@reduxjs/toolkit";
import { briefingReducer } from "./briefing/briefing.slice";

export const store = configureStore({
    reducer: {
        briefing: briefingReducer
    }
})