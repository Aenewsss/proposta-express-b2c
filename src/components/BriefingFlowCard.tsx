import FifthCiclesFlow from "./CirclesFlow/Fifth";
import FirstCiclesFlow from "./CirclesFlow/First";
import FourthCiclesFlow from "./CirclesFlow/Fourth";
import SecondCiclesFlow from "./CirclesFlow/Second";
import SixthCiclesFlow from "./CirclesFlow/Sixth";
import ThirdCiclesFlow from "./CirclesFlow/Third";

function BriefingFlowCard({ stage }: { stage: string }) {

    function getCirclesFlow() {
        switch (Number(stage)) {
            case 1: return <FirstCiclesFlow />
            case 2: return <SecondCiclesFlow />
            case 3: return <ThirdCiclesFlow />
            case 4: return <FourthCiclesFlow />
            case 5: return <FifthCiclesFlow />
            case 6: return <SixthCiclesFlow />
        }
    }

    return (
        <div className="flow-card p-4 d-md-block d-none">
            {getCirclesFlow()}
        </div>
    );
}

export default BriefingFlowCard;