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

const BriefingFormCard = ({ stage }: { stage: string }) => {

    const { brandColor, customerName } = useSelector((store: IStore) => store.briefing)

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (brandColor) setButtonDisabled(false)
        else if (customerName) setButtonDisabled(false)
        else setButtonDisabled(true)
    }, [brandColor, customerName]);

    function getForm() {
        switch (Number(stage)) {
            case 1: return <FirstBriefingForm />
            case 2: return <SecondBriefingForm />
            case 3: return <ThirdBriefingForm />
        }
    }

    function handlePageToBack(): RoutesEnum {
        switch (Number(stage)) {
            case 1: return RoutesEnum.HOME
            case 2: return RoutesEnum.FIRST_BRIEFING_STAGE
            case 3: return RoutesEnum.SECOND_BRIEFING_STAGE
        }
        return RoutesEnum.FIRST_BRIEFING_STAGE
    }

    function handlePageToGo(): RoutesEnum {
        switch (Number(stage)) {
            case 1: return RoutesEnum.SECOND_BRIEFING_STAGE
            case 2: return RoutesEnum.THIRD_BRIEFING_STAGE
            case 3: return RoutesEnum.HOME
        }
        return RoutesEnum.HOME
    }

    return (
        <>
            <div className="flow-card p-4 w-100">
                {getForm()}
            </div>
            {
                Number(stage) != 3 ?
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