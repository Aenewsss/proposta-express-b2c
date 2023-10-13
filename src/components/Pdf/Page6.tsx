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
import { SiteSectionsEnum } from "@components/enum/site-sections.enum";
import { ResourcesEnum } from "@components/enum/resources.enum";

const PdfPage6 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ color: "#000", fontFamily: "DM-Sans", fontWeight: "normal", paddingTop: 56, paddingHorizontal: 64, position: 'relative' }}>

            <View >
                <Text style={styles.question}>Quais páginas ou seções você imagina para seu site?</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.initialPage).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.initialPage}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.whoWeAre).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.whoWeAre}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.sevices).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.sevices}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.budget).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.budget}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.contact).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.contact}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.products).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.products}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.portfolio).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.portfolio}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.news).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.news}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.blog).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.blog}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.feedbacks).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.feedbacks}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.customerArea).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.customerArea}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.gallery).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.gallery}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.specialForms).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.specialForms}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.siteSections != 'string' && briefingData?.siteSections?.filter(el => el == SiteSectionsEnum.team).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{SiteSectionsEnum.team}</Text>
            </View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Alguma outra página?</Text>
                <Text style={styles.answer}>R: {briefingData?.anotherSection || "Nenhum"}</Text>
            </View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Você sabe quais recursos o projeto necessita?</Text>
                <Text style={styles.answer}>Só marque se você souber.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.carouselBanner).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.carouselBanner}</Text>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.contentManager).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.contentManager}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.googleMaps).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.googleMaps}</Text>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.instagram).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.instagram}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.multiLanguage).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.multiLanguage}</Text>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.newsletter).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.newsletter}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.onlineChat).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.onlineChat}</Text>
                    <Text style={[styles.answer, { width: 200}]}>[ {typeof briefingData?.resources != 'string' && briefingData?.resources!?.filter(el => el == ResourcesEnum.ticketSystem).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{ResourcesEnum.ticketSystem}</Text>
                </View>
            </View>

            <FooterPdf />
        </Page >
    );
}

export default PdfPage6;