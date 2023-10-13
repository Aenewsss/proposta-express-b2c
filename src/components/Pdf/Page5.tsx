import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import FooterPdf from "./Footer";
import { MarketTimeEnum } from "@components/enum/market-time.enum";
import { DifferentialsEnum } from "@components/enum/differentials.enum";
import { PersonalitiesEnum } from "@components/enum/personalities.enum";
import styles from "./styles";
import { VisualIdentityEnum } from "@components/enum/visual-identity-manual.enum";
import { SiteObjectiveEnum } from "@components/enum/site-objective.enum";
import { TypeSiteEnum } from "@components/enum/type-site.enum";
import { ExpectedAppearanceEnum } from "@components/enum/expected-appearance.enum";

const PdfPage5 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ color: "#000", fontFamily: "DM-Sans", fontWeight: "normal", paddingTop: 56, paddingHorizontal: 64, position: 'relative' }}>

            <View >
                <Text style={styles.question}>Qual o objetivo do site?</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteObjective != 'string' && briefingData?.siteObjective?.filter(el => el == SiteObjectiveEnum.inform).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteObjectiveEnum.inform}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteObjective != 'string' && briefingData?.siteObjective?.filter(el => el == SiteObjectiveEnum.sell).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteObjectiveEnum.sell}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteObjective != 'string' && briefingData?.siteObjective?.filter(el => el == SiteObjectiveEnum.support).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteObjectiveEnum.support}</Text>
            </View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Liste pelo menos 3 websites que você considere interessantes, informando o que especificamente lhe agrada neles.</Text>
                <Text style={styles.answer}>R: {briefingData?.sitesReference || "Nenhum"}</Text>
            </View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Que tipo de site você precisa?</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteType != 'string' && briefingData?.siteType?.filter(el => el == TypeSiteEnum.institutional).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{TypeSiteEnum.institutional}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteType != 'string' && briefingData?.siteType?.filter(el => el == TypeSiteEnum.blog).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{TypeSiteEnum.blog}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteType != 'string' && briefingData?.siteType?.filter(el => el == TypeSiteEnum.landingPage).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{TypeSiteEnum.landingPage}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteType != 'string' && briefingData?.siteType?.filter(el => el == TypeSiteEnum.campaign).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{TypeSiteEnum.campaign}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteType != 'string' && briefingData?.siteType?.filter(el => el == TypeSiteEnum.political).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{TypeSiteEnum.political}</Text>
            </View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Qual a aparência da identidade visual (design) esperada?</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.expectedAppearance != 'string' && briefingData?.expectedAppearance?.filter(el => el == ExpectedAppearanceEnum.artistic).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ExpectedAppearanceEnum.artistic}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.expectedAppearance != 'string' && briefingData?.expectedAppearance?.filter(el => el == ExpectedAppearanceEnum.clean).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ExpectedAppearanceEnum.clean}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.expectedAppearance != 'string' && briefingData?.expectedAppearance?.filter(el => el == ExpectedAppearanceEnum.modern).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ExpectedAppearanceEnum.modern}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.expectedAppearance != 'string' && briefingData?.expectedAppearance?.filter(el => el == ExpectedAppearanceEnum.tech).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ExpectedAppearanceEnum.tech}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.expectedAppearance != 'string' && briefingData?.expectedAppearance?.filter(el => el == ExpectedAppearanceEnum.traditional).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ExpectedAppearanceEnum.traditional}</Text>
            </View>


            <FooterPdf />
        </Page >
    );
}

export default PdfPage5;