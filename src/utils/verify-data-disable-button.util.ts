import { IBriefing, IStore } from "@components/store/types";
import { useSelector } from "react-redux";

export function verifyDataToDisableButton(briefing: IBriefing, stage: string, setButtonDisabled: any) {

    switch (Number(stage)) {
        case 1: return verifyFistStageData(briefing, setButtonDisabled)
        case 2: return verifySecondStageData(briefing, setButtonDisabled)
        case 3: return verifyThirdStageData(briefing, setButtonDisabled)
        case 4: return verifyFourthStageData(briefing, setButtonDisabled)
        case 5: return verifyFifthStageData(briefing, setButtonDisabled)
    }
}

function verifyFistStageData(briefing: IBriefing, setButtonDisabled: any) {
    if (briefing.customerName && briefing.branchActivity &&
        briefing.marketTime && briefing.differentials.length > 0 &&
        briefing.summaryStory && briefing.summaryServices) {
        setButtonDisabled(false)
    } else setButtonDisabled(true)
}

function verifySecondStageData(briefing: IBriefing, setButtonDisabled: any) {
    if (briefing.brandMission && briefing.personalities?.length > 0 &&
        briefing.preventColor && briefing.visualIdentityManual && briefing.marketingMaterial) {
        setButtonDisabled(false)
    } else setButtonDisabled(true)
}

function verifyThirdStageData(briefing: IBriefing, setButtonDisabled: any) {
    if (briefing.aboutPublicTarget && briefing.whyPublicNeedWebsite && briefing.publicRelationshipWithBrand) {
        setButtonDisabled(false)
    } else setButtonDisabled(true)
}

function verifyFourthStageData(briefing: IBriefing, setButtonDisabled: any) {
    if (briefing.expectedAppearance.length > 0 && briefing.siteObjective.length > 0 &&
        briefing.siteType.length > 0 && briefing.siteSections.length > 0 &&
        briefing.sitesReference) {
        setButtonDisabled(false)
    } else setButtonDisabled(true)
}

function verifyFifthStageData(briefing: IBriefing, setButtonDisabled: any) {
    if (briefing.deadline && briefing.investment) {
        setButtonDisabled(false)
    } else setButtonDisabled(true)
}
