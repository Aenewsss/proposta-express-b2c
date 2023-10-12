import { ExpectedAppearanceEnum } from "@components/enum/expected-appearance.enum";
import { ResourcesEnum } from "@components/enum/resources.enum";
import { SiteObjectiveEnum } from "@components/enum/site-objective.enum";
import { SiteSectionsEnum } from "@components/enum/site-sections.enum";
import { TypeSiteEnum } from "@components/enum/type-site.enum";
import { changeAnotherSections, changeCurrentSite, changeExpectedAppearance, changeResources, changeSiteObjective, changeSiteSections, changeSiteType, changeSitesReference } from "@components/store/briefing/briefing.slice";
import { IStore } from "@components/store/types";
import { useDispatch, useSelector } from "react-redux"

const FourthBriefingForm = () => {

    const { currentSite, sitesReference, anotherSection } = useSelector((store: IStore) => store.briefing)

    const dispatch = useDispatch()

    return (
        <form className="p-2">
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Qual o endereço do site atual?</label>
                <input value={currentSite} onChange={e => dispatch(changeCurrentSite(e.target.value))} placeholder="Ex: aenamartinelli.com.br" type="text" className="form-control" />
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Qual o objetivo do site?</label>
                <div className="d-flex column-gap-5 row-gap-2 flex-wrap">
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteObjective(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteObjective1" value={SiteObjectiveEnum.inform} name="site-objective" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteObjective1">{SiteObjectiveEnum.inform}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteObjective(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteObjective2" value={SiteObjectiveEnum.sell} name="site-objective" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteObjective2">{SiteObjectiveEnum.sell}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteObjective(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteObjective3" value={SiteObjectiveEnum.support} name="site-objective" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteObjective3">{SiteObjectiveEnum.support}</label>
                    </div>
                </div>
            </div>
            
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Liste pelo menos 3 websites que você considere interessantes, informando o que especificamente lhe agrada neles</label>
                <textarea onChange={e => dispatch(changeSitesReference(e.target.value))} value={sitesReference} placeholder="Sua resposta:" className="form-control" rows={3}></textarea>
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Que tipo de site você precisa?</label>
                <div className="d-flex column-gap-5 row-gap-2 flex-wrap">
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteType(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteType1" value={TypeSiteEnum.institutional} name="site-type" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType1">{TypeSiteEnum.institutional}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteType(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteType2" value={TypeSiteEnum.blog} name="site-type" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType2">{TypeSiteEnum.blog}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteType(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteType3" value={TypeSiteEnum.landingPage} name="site-type" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType3">{TypeSiteEnum.landingPage}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteType(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteType4" value={TypeSiteEnum.campaign} name="site-type" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType4">{TypeSiteEnum.campaign}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteType(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteType5" value={TypeSiteEnum.political} name="site-type" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteType5">{TypeSiteEnum.political}</label>
                    </div>
                </div>
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Qual a aparência da identidade visual (design) esperada?</label>
                <div className="d-flex column-gap-5 row-gap-2 flex-wrap">
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeExpectedAppearance(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteAppearance1" value={ExpectedAppearanceEnum.traditional} name="site-appearance" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="siteAppearance1">{ExpectedAppearanceEnum.traditional}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeExpectedAppearance(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteAppearance2" value={ExpectedAppearanceEnum.artistic} name="site-appearance" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="siteAppearance2">{ExpectedAppearanceEnum.artistic}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeExpectedAppearance(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteAppearance3" value={ExpectedAppearanceEnum.tech} name="site-appearance" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="siteAppearance3">{ExpectedAppearanceEnum.tech}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeExpectedAppearance(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteAppearance4" value={ExpectedAppearanceEnum.modern} name="site-appearance" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="siteAppearance4">{ExpectedAppearanceEnum.modern}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeExpectedAppearance(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteAppearance5" value={ExpectedAppearanceEnum.clean} name="site-appearance" />
                        <label className="w-100px form-check-label fs-16 fw-medium" htmlFor="siteAppearance5">{ExpectedAppearanceEnum.clean}</label>
                    </div>
                </div>
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Quais páginas ou seções você imagina para seu site?</label>
                <div className="d-flex column-gap-5 row-gap-2 flex-wrap">
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections1" value={SiteSectionsEnum.initialPage} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections1">{SiteSectionsEnum.initialPage}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections2" value={SiteSectionsEnum.whoWeAre} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections2">{SiteSectionsEnum.whoWeAre}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections3" value={SiteSectionsEnum.sevices} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections3">{SiteSectionsEnum.sevices}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections4" value={SiteSectionsEnum.budget} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections4">{SiteSectionsEnum.budget}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections5" value={SiteSectionsEnum.contact} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections5">{SiteSectionsEnum.contact}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections6" value={SiteSectionsEnum.news} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections6">{SiteSectionsEnum.news}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections7" value={SiteSectionsEnum.blog} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections7">{SiteSectionsEnum.blog}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections8" value={SiteSectionsEnum.products} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections8">{SiteSectionsEnum.products}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections9" value={SiteSectionsEnum.gallery} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections9">{SiteSectionsEnum.gallery}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections10" value={SiteSectionsEnum.team} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections10">{SiteSectionsEnum.team}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections11" value={SiteSectionsEnum.feedbacks} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections11">{SiteSectionsEnum.feedbacks}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections12" value={SiteSectionsEnum.portfolio} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections12">{SiteSectionsEnum.portfolio}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections13" value={SiteSectionsEnum.specialForms} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections13">{SiteSectionsEnum.specialForms}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeSiteSections(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteSections14" value={SiteSectionsEnum.customerArea} name="site-sections" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteSections14">{SiteSectionsEnum.customerArea}</label>
                    </div>
                </div>
            </div>
            
            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Alguma outra página ou seção?</label>
                <textarea onChange={e => dispatch(changeAnotherSections(e.target.value))} value={anotherSection} placeholder="Sua resposta:" className="form-control" rows={3}></textarea>
            </div>

            <div className="mb-4 d-flex flex-column gap-2 w-100">
                <label className="fw-bold">Você sabe quais recursos o projeto necessita?</label>
                <span className="mt-n2">Só marque se você souber.</span>
                <div className="d-flex column-gap-5 row-gap-2 flex-wrap">
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources1" value={ResourcesEnum.carouselBanner} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources1">{ResourcesEnum.carouselBanner}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources2" value={ResourcesEnum.onlineChat} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources2">{ResourcesEnum.onlineChat}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources3" value={ResourcesEnum.ticketSystem} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources3">{ResourcesEnum.ticketSystem}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources4" value={ResourcesEnum.contentManager} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources4">{ResourcesEnum.contentManager}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources5" value={ResourcesEnum.googleMaps} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources5">{ResourcesEnum.googleMaps}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources6" value={ResourcesEnum.instagram} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources6">{ResourcesEnum.instagram}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources7" value={ResourcesEnum.newsletter} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources7">{ResourcesEnum.newsletter}</label>
                    </div>
                    <div className="form-check d-flex gap-2 align-items-center">
                        <input onChange={e => dispatch(changeResources(e.target.value))} className="form-check-input border-dark check-styled" role="button" type="checkbox" id="siteResources8" value={ResourcesEnum.multiLanguage} name="site-appearance" />
                        <label className="form-check-label fs-16 fw-medium" htmlFor="siteResources8">{ResourcesEnum.multiLanguage}</label>
                    </div>
                </div>
            </div>
            
        </form>
    );
}

export default FourthBriefingForm;