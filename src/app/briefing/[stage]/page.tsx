import BriefingFlowCard from "@components/components/BriefingFlowCard";
import BriefingFormCard from "@components/components/BriefingFormCard";
import BriefingExplanation from "@components/components/Explanation";
import { RoutesEnum } from "@components/enum/routes.enum";

export default function Briefing({ params }: { params: { stage: string } }) {
    if (params.stage != "explanation")
        return (
            <section className="d-flex justify-content-between container mt-5 gap-5">
                <BriefingFlowCard stage={params.stage} />
                <div className="d-flex flex-column gap-4 w-100">
                    <BriefingFormCard stage={params.stage} />
                </div>
            </section>
        )
    else return <BriefingExplanation />
}