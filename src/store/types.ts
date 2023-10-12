import { DifferentialsEnum } from "@components/enum/differentials.enum"
import { ExpectedAppearanceEnum } from "@components/enum/expected-appearance.enum"
import { MarketTimeEnum } from "@components/enum/market-time.enum"
import { PersonalitiesEnum } from "@components/enum/personalities.enum"
import { ResourcesEnum } from "@components/enum/resources.enum"
import { SiteObjectiveEnum } from "@components/enum/site-objective.enum"
import { SiteSectionsEnum } from "@components/enum/site-sections.enum"
import { TypeSiteEnum } from "@components/enum/type-site.enum"
import { VisualIdentityEnum } from "@components/enum/visual-identity-manual.enum"

export interface IStore {
    briefing: IBriefing
}

export interface IBriefing {
    brandColor: string
    customerName: string
    customerLink: string
    branchActivity: string
    marketTime: MarketTimeEnum | string
    differentials: DifferentialsEnum[] | string
    summaryStory: string
    summaryServices: string
    brandMission: string
    personalities: PersonalitiesEnum[] | string
    preventColor: string
    visualIdentityManual: VisualIdentityEnum | string
    marketingMaterial: "yes" | "no"
    aboutPublicTarget: string
    whyPublicNeedWebsite: string
    publicRelationshipWithBrand: string
    currentSite?: string
    siteObjective: SiteObjectiveEnum[] | string
    sitesReference: string
    siteType: TypeSiteEnum[] | string
    expectedAppearance: ExpectedAppearanceEnum[] | string
    siteSections: SiteSectionsEnum[] | string
    anotherSection?: string
    resources?: ResourcesEnum[] | string
}