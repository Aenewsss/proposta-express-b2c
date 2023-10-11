import { createSlice } from "@reduxjs/toolkit"
import { BriefingInitialState } from "./initial.state"

const briefingSlice = createSlice({
    name: "briefing",
    initialState: BriefingInitialState,
    reducers: {
        changeCustomerName(state, action) {
            state.customerName = action.payload

            const encodedCustomerName = encodeURIComponent(action.payload)
            state.customerLink = `http://localhost:3000?customerName=${encodedCustomerName}`
        },
        changeBrandColor(state, action) {
            state.brandColor = action.payload

            const encodedCustomerName = encodeURIComponent(state.customerName)
            const encodedBrandColor = encodeURIComponent(action.payload)

            state.customerLink = `http://localhost:3000?customerName=${encodedCustomerName}&color=${encodedBrandColor}`
        },
    }
})

export const { changeBrandColor, changeCustomerName, } = briefingSlice.actions;
export const briefingReducer = briefingSlice.reducer