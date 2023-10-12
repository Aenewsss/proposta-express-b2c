import { InvestmentEnum } from "@components/enum/investment.enum";
import { TypeSiteEnum } from "@components/enum/type-site.enum";
import { changeDeadline, changeInvestment } from "@components/store/briefing/briefing.slice";
import { IStore } from "@components/store/types";
import { useDispatch, useSelector } from "react-redux"

const FifthBriefingForm = () => {

    const { deadline, investment } = useSelector((store: IStore) => store.briefing)

    const dispatch = useDispatch()

    return (
        <form className="p-2">

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Liste pelo menos 3 websites que você considere interessantes, informando o que especificamente lhe agrada neles</label>
                <textarea onChange={e => dispatch(changeDeadline(e.target.value))} value={deadline} placeholder="Sua resposta:" className="form-control" rows={3}></textarea>
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Que tipo de site você precisa?</label>
                <div className="d-flex column-gap-5 row-gap-2 flex-wrap">
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType1" value={InvestmentEnum.upTo2} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType1">{InvestmentEnum.upTo2}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType2" value={InvestmentEnum.upTo5} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType2">{InvestmentEnum.upTo5}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType3" value={InvestmentEnum.upTo10} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType3">{InvestmentEnum.upTo10}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType4" value={InvestmentEnum.upTo20} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType4">{InvestmentEnum.upTo20}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType5" value={InvestmentEnum.upTo50} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType5">{InvestmentEnum.upTo50}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType6" value={InvestmentEnum.upTo100} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType6">{InvestmentEnum.upTo100}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType7" value={InvestmentEnum.moreThan100} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType7">{InvestmentEnum.moreThan100}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeInvestment(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="radio" id="siteType8" value={InvestmentEnum.none} name="site-investment" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType8">{InvestmentEnum.none}</label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FifthBriefingForm;