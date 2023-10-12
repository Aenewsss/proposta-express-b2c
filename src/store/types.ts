import { DifferentialsEnum } from "@components/enum/differentials.enum"
import { MarketTimeEnum } from "@components/enum/market-time.enum"

export interface IStore {
    briefing: IBriefing
}

export interface IBriefing {
    brandColor: string
    customerName: string
    customerLink: string
    branchActivity: string
    marketTime: MarketTimeEnum
    differentials: DifferentialsEnum
    summaryStory: string
    summaryServices: string
}