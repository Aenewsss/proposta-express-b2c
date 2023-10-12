import { PersonalitiesEnum } from "@components/enum/personalities.enum";
import { VisualIdentityEnum } from "@components/enum/visual-identity-manual.enum";
import { changeBrandColor, changeBrandMission, changeMarketingMaterial, changePersonality, changePreventColor, changeVisualIdentityManual } from "@components/store/briefing/briefing.slice";
import { IStore } from "@components/store/types";
import { useDispatch, useSelector } from "react-redux";

const SecondBriefingForm = () => {

    const { brandMission, preventColor } = useSelector((store: IStore) => store.briefing)

    const dispatch = useDispatch()

    return (
        <form className="p-2">
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Qual é a missão e essência da sua marca? Porque criou ela?</label>
                <textarea onChange={e => dispatch(changeBrandMission(e.target.value))} value={brandMission} placeholder="Sua resposta:" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Como você descreveria a personalidade da sua marca?</label>
                <div className="d-flex column-gap-5 row-gap-2 flex-wrap">
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox1" value={PersonalitiesEnum.formal} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox1">Formal</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox2" value={PersonalitiesEnum.friendly} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox2">Amigável</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox3" value={PersonalitiesEnum.robust} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox3">Robusta</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox4" value={PersonalitiesEnum.exclusive} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox4">Exclusiva</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox5" value={PersonalitiesEnum.informal} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox5">Informal</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox6" value={PersonalitiesEnum.modern} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox6">Moderna</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox7" value={PersonalitiesEnum.delicate} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox7">Delicada</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox8" value={PersonalitiesEnum.strong} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox8">Forte</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox9" value={PersonalitiesEnum.funny} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox9">Divertida</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox10" value={PersonalitiesEnum.old} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox10">Antiga</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox11" value={PersonalitiesEnum.tech} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox11">Tecnológica</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox12" value={PersonalitiesEnum.masculine} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox12">Masculina</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox13" value={PersonalitiesEnum.serious} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox13">Séria</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox14" value={PersonalitiesEnum.safe} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox14">Segura</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox15" value={PersonalitiesEnum.human} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox15">Humana</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changePersonality(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="inlineCheckbox16" value={PersonalitiesEnum.feminine} name="differential" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox16">Feminina</label>
                    </div>
                </div>
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea2" className="form-label fw-bold">Devemos evitar alguma cor ou estilo?</label>
                <textarea onChange={e => dispatch(changePreventColor(e.target.value))} value={preventColor} placeholder="Sua resposta:" className="form-control" id="exampleFormControlTextarea2" rows={1}></textarea>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">A empresa possui uma marca e Manual de Identidade Visual?</label>
                <div className="d-flex flex-column gap-2">
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeVisualIdentityManual(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="radioIdentity1" value={VisualIdentityEnum.both} name="visual-identity" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="radioIdentity1">Sim, temos a marca em vetor (.CDR, .AI ou .EPS) e um manual.</label>
                    </div>
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeVisualIdentityManual(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="radioIdentity2" value={VisualIdentityEnum.onlyBrand} name="visual-identity" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="radioIdentity2">Temos apenas a marca.</label>
                    </div>
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeVisualIdentityManual(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="inlineCheckbox3" value={VisualIdentityEnum.none} name="visual-identity" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox3">Não temos marca e nem MIV.</label>
                    </div>
                </div>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Existem materiais de marketing disponíveis para analisarmos?</label>
                <div className="d-flex flex-column gap-2">
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeMarketingMaterial(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="marketingMaterial1" value={"yes"} name="marketing-material" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="marketingMaterial1">Sim, temos alguns materiais.</label>
                    </div>
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeMarketingMaterial(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="marketingMaterial2" value={"no"} name="marketing-material" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="marketingMaterial2">Não.</label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SecondBriefingForm;