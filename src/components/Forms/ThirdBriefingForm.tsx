import { IStore } from "@components/store/types";
import { useDispatch, useSelector } from "react-redux"
import { changeAboutPublicTarget, changePublicRelationshipWithBrand, changeWhyPublicNeedWebsite } from "@components/store/briefing/briefing.slice";

const ThirdBriefingForm = () => {

    const { aboutPublicTarget, publicRelationshipWithBrand, whyPublicNeedWebsite } = useSelector((store: IStore) => store.briefing)

    const dispatch = useDispatch()

    return (
        <form className="p-2">
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">O que você já sabe sobre o público que pretende atingir com website?</label>
                <textarea
                    onChange={e => dispatch(changeAboutPublicTarget(e.target.value))} value={aboutPublicTarget}
                    placeholder="Descreva o máximo que você puder: gênero, idade, nacionalidade, humor, profissão, formação, classe social, hábitos de consumo, estilo de vida, etc."
                    className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Por que esse público precisa do seu site?</label>
                <textarea onChange={e => dispatch(changeWhyPublicNeedWebsite(e.target.value))} value={whyPublicNeedWebsite} placeholder="Sua resposta:" className="form-control" rows={3}></textarea>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Qual a relações do público com a marca? Como ela consome sua marca?</label>
                <textarea onChange={e => dispatch(changePublicRelationshipWithBrand(e.target.value))} value={publicRelationshipWithBrand} placeholder="Sua resposta:" className="form-control" rows={3}></textarea>
            </div>
        </form>
    );
}

export default ThirdBriefingForm;