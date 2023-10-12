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
        changeBrandMission(state, action) {
            state.brandMission = action.payload
        },
        changePersonality(state, action) {
            if (!state.personalities || typeof state.personalities === 'string') {
                // Se state.personalities for uma string, converta-a em um array com o valor existente
                state.personalities = [action.payload];
            } else {
                const personalities = state.personalities;

                personalities.find(el => el == action.payload)
                    ? state.personalities = personalities.filter(el => el != action.payload)
                    : state.personalities.push(action.payload)
            }
        },
        changePreventColor(state, action) {
            state.preventColor = action.payload
        },
        changeVisualIdentityManual(state, action) {
            state.visualIdentityManual = action.payload
        },
        changeMarketingMaterial(state, action) {
            state.marketingMaterial = action.payload
        },
        changeAboutPublicTarget(state, action) {
            state.aboutPublicTarget = action.payload
        },
        changePublicRelationshipWithBrand(state, action) {
            state.publicRelationshipWithBrand = action.payload
        },
        changeWhyPublicNeedWebsite(state, action) {
            state.whyPublicNeedWebsite = action.payload
        },
        changeExpectedAppearance(state, action) {

            if (!state.expectedAppearance || typeof state.expectedAppearance === 'string') {
                // Se state.expectedAppearance for uma string, converta-a em um array com o valor existente
                state.expectedAppearance = [action.payload];
            } else {
                const expectedAppearance = state.expectedAppearance!;

                expectedAppearance.find(el => el == action.payload)
                    ? state.expectedAppearance = expectedAppearance.filter(el => el != action.payload)
                    : state.expectedAppearance!.push(action.payload)
            }

        },
        changeSiteObjective(state, action) {

            if (!state.siteObjective || typeof state.siteObjective === 'string') {
                // Se state.siteObjective for uma string, converta-a em um array com o valor existente
                state.siteObjective = [action.payload];
            } else {
                const siteObjective = state.siteObjective!;

                siteObjective.find(el => el == action.payload)
                    ? state.siteObjective = siteObjective.filter(el => el != action.payload)
                    : state.siteObjective!.push(action.payload)
            }
        },
        changeSiteType(state, action) {

            if (!state.siteType || typeof state.siteType === 'string') {
                // Se state.siteType for uma string, converta-a em um array com o valor existente
                state.siteType = [action.payload];
            } else {

                const siteType = state.siteType!;

                siteType.find(el => el == action.payload)
                    ? state.siteType = siteType.filter(el => el != action.payload)
                    : state.siteType!.push(action.payload)
            }
        },
        changeSiteSections(state, action) {

            if (!state.siteSections || typeof state.siteSections === 'string') {
                // Se state.siteSections for uma string, converta-a em um array com o valor existente
                state.siteSections = [action.payload];
            } else {

                const siteSections = state.siteSections!;

                siteSections.find(el => el == action.payload)
                    ? state.siteSections = siteSections.filter(el => el != action.payload)
                    : state.siteSections!.push(action.payload)
            }
        },
        changeSitesReference(state, action) {
            state.sitesReference = action.payload
        },
        changeCurrentSite(state, action) {
            state.currentSite = action.payload
        },
        changeAnotherSections(state, action) {
            state.anotherSection = action.payload
        },
        changeResources(state, action) {
            if (!state.resources || typeof state.resources === 'string') {
                // Se state.resources for uma string, converta-a em um array com o valor existente
                state.resources = [action.payload];
            } else {
                const resources = state.resources!;

                resources.find(el => el == action.payload)
                    ? state.resources = resources.filter(el => el != action.payload)
                    : state.resources!.push(action.payload)
            }
        },
    }
})

export const {
    changeBrandColor, changeCustomerName,
    changeBranchActivity, changeMarketTime,
    changeDifferentials, changeSummaryStory,
    changeSummaryServices, changeBrandMission,
    changePersonality, changePreventColor,
    changeVisualIdentityManual, changeMarketingMaterial,
    changeAboutPublicTarget, changePublicRelationshipWithBrand,
    changeWhyPublicNeedWebsite, changeExpectedAppearance,
    changeSiteObjective, changeSiteType, changeSiteSections,
    changeSitesReference, changeCurrentSite, changeAnotherSections,
    changeResources } = briefingSlice.actions;
export const briefingReducer = briefingSlice.reducer