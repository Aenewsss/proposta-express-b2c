import { DifferentialsEnum } from "@components/enum/differentials.enum";
import { MarketTimeEnum } from "@components/enum/market-time.enum";
import { changeBranchActivity, changeCustomerName, changeDifferentials, changeMarketTime, changeSummaryServices, changeSummaryStory } from "@components/store/briefing/briefing.slice";
import { IStore } from "@components/store/types";
import { useDispatch, useSelector } from "react-redux";

const FirstBriefingForm = () => {

    const { customerName, branchActivity, summaryServices, summaryStory } = useSelector((store: IStore) => store.briefing)

    const dispatch = useDispatch()

    return (
        <form className="p-2">
            <div className="d-flex column-gap-5 row-gap-2 flex-md-nowrap flex-wrap">
                <div className="mb-4 d-flex flex-column gap-2 w-md-50 w-100">
                    <label className="fw-bold">Qual é o nome da sua empresa?</label>
                    <input value={customerName} onChange={e => dispatch(changeCustomerName(e.target.value))} placeholder="Ex: Martinelli Tech" type="text" className="form-control" />
                </div>
                <div className="mb-4 d-flex flex-column gap-2 w-md-50 w-100">
                    <label className="fw-bold">Qual é o ramo de atuação?</label>
                    <input value={branchActivity} onChange={e => dispatch(changeBranchActivity(e.target.value))} placeholder="Ex: Hamburgueira, Psicologia" type="text" className="form-control" />
                </div>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Estão nesse mercado a quantos anos?</label>
                <div className="d-flex column-gap-4 row-gap-2 flex-md-nowrap flex-wrap">
                    <div className="form-check form-check-inline d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeMarketTime(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="inlineCheckbox1" value={MarketTimeEnum.upToOneYear} name="time" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox1">Até um ano</label>
                    </div>
                    <div className="form-check form-check-inline d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeMarketTime(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="inlineCheckbox2" value={MarketTimeEnum.upToFourYears} name="time" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox2">2 à 4 anos</label>
                    </div>
                    <div className="form-check form-check-inline d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeMarketTime(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="inlineCheckbox3" value={MarketTimeEnum.moreThanFiveYears} name="time" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox3">+ de 5 anos</label>
                    </div>
                    <div className="form-check form-check-inline d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeMarketTime(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="radio" id="inlineCheckbox4" value={MarketTimeEnum.moreThanTenYears} name="time" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox4">+ de 10 anos</label>
                    </div>
                </div>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Escreva uma breve história da empresa</label>
                <textarea onChange={e => dispatch(changeSummaryStory(e.target.value))} value={summaryStory} placeholder="Sua resposta:" className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea2" className="form-label fw-bold">Que tipo de produtos ou serviços sua empresa oferece?</label>
                <textarea onChange={e => dispatch(changeSummaryServices(e.target.value))} value={summaryServices} placeholder="Sua resposta:" className="form-control" id="exampleFormControlTextarea2" rows={3}></textarea>
            </div>
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">O que diferencia seu negócio de seus concorrentes?</label>
                <div className="d-flex column-gap-4 row-gap-2 flex-md-nowrap flex-wrap">
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeDifferentials(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="checkbox" id="inlineCheckbox5" value={DifferentialsEnum.price} name="differential" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox5">Preço</label>
                    </div>
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeDifferentials(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="checkbox" id="inlineCheckbox6" value={DifferentialsEnum.quality} name="differential" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox6">Qualidade</label>
                    </div>
                    <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeDifferentials(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="checkbox" id="inlineCheckbox7" value={DifferentialsEnum.services} name="differential" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox7">Serviços</label>
                    </div>
                    {/* <div className="form-check form-check-inline  d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeDifferentials(e.target.value))} className="form-check-input border-dark radio-styled" role="button" type="checkbox" id="inlineCheckbox8" value={DifferentialsEnum.other} name="differential" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="inlineCheckbox8">Outro</label>
                    </div> */}
                </div>
            </div>
        </form>
    );
}

export default FirstBriefingForm;