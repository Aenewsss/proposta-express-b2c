import { createSlice } from "@reduxjs/toolkit"
import { BriefingInitialState } from "./initial.state"

const briefingSlice = createSlice({
    name: "briefing",
    initialState: BriefingInitialState,
    reducers: {
        changeCustomerName(state, action) {
            state.customerName = action.payload
        },
        changeBrandColor(state, action) {
            state.brandColor = action.payload
        },
        changeBranchActivity(state, action) {
            state.branchActivity = action.payload
        },
        changeMarketTime(state, action) {
            state.marketTime = action.payload
        },
        changeDifferentials(state, action) {
            state.differentials = action.payload
        },
        changeSummaryStory(state, action) {
            state.summaryStory = action.payload
        },
        changeSummaryServices(state, action) {
            state.summaryServices = action.payload
        },
    }
})

export const {
    changeBrandColor, changeCustomerName,
    changeBranchActivity, changeMarketTime,
    changeDifferentials, changeSummaryStory,
    changeSummaryServices, } = briefingSlice.actions;
export const briefingReducer = briefingSlice.reducer