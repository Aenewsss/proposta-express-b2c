import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import FooterPdf from "./Footer";
import { MarketTimeEnum } from "@components/enum/market-time.enum";
import { DifferentialsEnum } from "@components/enum/differentials.enum";
import styles from "./styles";

const PdfPage2 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ color: "#000", fontFamily: "DM-Sans", fontWeight: "normal", paddingTop: 56, paddingHorizontal: 64, position: 'relative' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ width: 32, height: 29, backgroundColor: '#111629', alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: '#fff', fontWeight: "semibold", fontSize: 16 }}>01</Text>
                </View>
                <Text style={{ color: "#111629", fontWeight: "semibold", fontSize: 20 }}>Sobre O Negócio</Text>
            </View>

            <View style={{ marginTop: 22, width: 492, height: 1, backgroundColor: "#00000022" }}></View>

            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Qual o nome da empresa?</Text>
                <Text style={styles.answer}>R: {briefingData?.customerName || "Nenhum"}</Text>
            </View>

            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Qual o ramo de atuação?</Text>
                <Text style={styles.answer}>Seja específico, ex: Psicologia Infantil</Text>
                <Text style={styles.answer}>R: {briefingData?.branchActivity || "Nenhum"}</Text>
            </View>
            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Estão nesse mercado a quantos anos?</Text>
                <Text style={styles.answer}>[ {briefingData?.marketTime == MarketTimeEnum.upToOneYear ? "x" : "  "} ]&nbsp;&nbsp;{MarketTimeEnum.upToOneYear}</Text>
                <Text style={styles.answer}>[ {briefingData?.marketTime == MarketTimeEnum.upToFourYears ? "x" : "  "} ]&nbsp;&nbsp;{MarketTimeEnum.upToFourYears}</Text>
                <Text style={styles.answer}>[ {briefingData?.marketTime == MarketTimeEnum.moreThanFiveYears ? "x" : "  "} ]&nbsp;&nbsp;{MarketTimeEnum.moreThanFiveYears}</Text>
                <Text style={styles.answer}>[ {briefingData?.marketTime == MarketTimeEnum.moreThanTenYears ? "x" : "  "} ]&nbsp;&nbsp;{MarketTimeEnum.moreThanTenYears}</Text>
            </View>
            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Escreva uma breve história da empresa:</Text>
                <Text style={styles.answer}>R: {briefingData?.summaryStory || "Nenhum"}</Text>
            </View>
            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Que tipo de produtos ou serviços sua empresa oferece?</Text>
                <Text style={styles.answer}>R: {briefingData?.summaryServices || "Nenhum"}</Text>
            </View>
            <View style={styles.viewQuestion}>
                <Text style={styles.question}>O que diferencia seu negócio de seus concorrentes?</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.differentials != 'string' && briefingData?.differentials.filter(el => el == DifferentialsEnum.price).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{DifferentialsEnum.price}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.differentials != 'string' && briefingData?.differentials.filter(el => el == DifferentialsEnum.quality).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{DifferentialsEnum.quality}</Text>
                <Text style={styles.answer}>[ {typeof briefingData?.differentials != 'string' && briefingData?.differentials.filter(el => el == DifferentialsEnum.services).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{DifferentialsEnum.services}</Text>
            </View>

            <FooterPdf />
        </Page>
    );
}

export default PdfPage2;