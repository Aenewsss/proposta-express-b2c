import FirstCiclesFlow from "./CirclesFlow/First";
import SecondCiclesFlow from "./CirclesFlow/Second";
import ThirdCiclesFlow from "./CirclesFlow/Third";

function BriefingFlowCard({ stage }: { stage: string }) {

    function getCirclesFlow() {
        switch (Number(stage)) {
            case 1: return <FirstCiclesFlow />
            case 2: return <SecondCiclesFlow />
            case 3: return <ThirdCiclesFlow />
        }
    }

    return (
        <div className="flow-card p-4">
            {getCirclesFlow()}
        </div>
    );
}

export default BriefingFlowCard;