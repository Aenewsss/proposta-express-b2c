'use client'

import { useState, useEffect } from "react";
import BackButton from "./Buttons/BackButton";
import ContinueButton from "./Buttons/ContinueButton";
import FirstBriefingForm from "./Forms/FirstBriefingForm";
import SecondBriefingForm from "./Forms/SecondBriefingForm";
import ThirdBriefingForm from "./Forms/ThirdBriefingForm";
import { RoutesEnum } from "@components/enum/routes.enum";
import { IStore } from "@components/store/types";
import { useSelector } from "react-redux"
import FinishButton from "./Buttons/FinishButton";
import { verifyDataToDisableButton } from "@components/utils/verify-data-disable-button.util";
import FourthBriefingForm from "./Forms/FourthBriefingForm";

const BriefingFormCard = ({ stage }: { stage: string }) => {

    const { briefing } = useSelector((store: IStore) => store)

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        verifyDataToDisableButton(briefing, stage, setButtonDisabled)
    }, [briefing]);

    function getForm() {
        switch (Number(stage)) {
            case 1: return <FirstBriefingForm />
            case 2: return <SecondBriefingForm />
            case 3: return <ThirdBriefingForm />
            case 4: return <FourthBriefingForm />
            case 5: return <ThirdBriefingForm />
            case 6: return <ThirdBriefingForm />
        }
    }

    function handlePageToBack(): RoutesEnum {
        switch (Number(stage)) {
            case 1: return RoutesEnum.HOME
            case 2: return RoutesEnum.FIRST_BRIEFING_STAGE
            case 3: return RoutesEnum.SECOND_BRIEFING_STAGE
            case 4: return RoutesEnum.THIRD_BRIEFING_STAGE
            case 5: return RoutesEnum.FOURTH_BRIEFING_STAGE
            case 6: return RoutesEnum.FIFTH_BRIEFING_STAGE
        }
        return RoutesEnum.FIRST_BRIEFING_STAGE
    }

    function handlePageToGo(): RoutesEnum {
        switch (Number(stage)) {
            case 1: return RoutesEnum.SECOND_BRIEFING_STAGE
            case 2: return RoutesEnum.THIRD_BRIEFING_STAGE
            case 3: return RoutesEnum.FOURTH_BRIEFING_STAGE
            case 4: return RoutesEnum.FIFTH_BRIEFING_STAGE
            case 5: return RoutesEnum.LAST_BRIEFING_STAGE
            case 6: return RoutesEnum.HOME
        }
        return RoutesEnum.HOME
    }

    return (
        <>
            <div className="flow-card p-4 w-100 h-100">
                {getForm()}
            </div>
            {
                Number(stage) != 6 ?
                    <div className="d-flex justify-content-between">
                        <BackButton pageToBack={handlePageToBack()} />
                        <ContinueButton pageToGo={handlePageToGo()} buttonDisabled={buttonDisabled} />
                    </div>
                    : <div className="d-flex justify-content-end">
                        <FinishButton pageToGo={handlePageToGo()} />
                    </div>
            }
        </>
    );
}

export default BriefingFormCard;