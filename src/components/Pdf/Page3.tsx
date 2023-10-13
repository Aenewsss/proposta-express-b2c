import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import FooterPdf from "./Footer";
import { MarketTimeEnum } from "@components/enum/market-time.enum";
import { DifferentialsEnum } from "@components/enum/differentials.enum";
import { PersonalitiesEnum } from "@components/enum/personalities.enum";
import styles from "./styles";
import { VisualIdentityEnum } from "@components/enum/visual-identity-manual.enum";

const PdfPage3 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ color: "#000", fontFamily: "DM-Sans", fontWeight: "normal", paddingTop: 56, paddingHorizontal: 64, position: 'relative' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ width: 32, height: 29, backgroundColor: '#111629', alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: '#fff', fontWeight: "semibold", fontSize: 16 }}>02</Text>
                </View>
                <Text style={{ color: "#111629", fontWeight: "semibold", fontSize: 20 }}>Sobre A Marca</Text>
            </View>

            <View style={{ marginTop: 22, width: 492, height: 1, backgroundColor: "#00000022" }}></View>

            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Qual é a missão e essência da sua marca? Porque criou ela?</Text>
                <Text style={styles.answer}>R: {briefingData?.brandMission || "Nenhum"}</Text>
            </View>

            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Como você descreveria a personalidade da sua marca?</Text>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.formal).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.formal}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.robust).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.robust}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.informal).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.informal}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.delicate).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.delicate}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.funny).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.funny}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.tech).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.tech}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.serious).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.serious}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.human).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.human}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.friendly).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.friendly}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.exclusive).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.exclusive}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.modern).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.modern}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.strong).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.strong}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.old).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.old}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.masculine).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.masculine}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 100 }}>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.safe).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.safe}</Text>
                    <Text style={[styles.answer, { width: 120}]}>[ {typeof briefingData?.personalities != 'string' && briefingData?.personalities?.filter(el => el == PersonalitiesEnum.feminine).length > 0 ? "x" : "  "} ]&nbsp;&nbsp;{PersonalitiesEnum.feminine}</Text>
                </View>
            </View>

            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Devemos evitar alguma cor ou estilo?</Text>
                <Text style={styles.answer}>R: {briefingData?.preventColor || "Nenhum"}</Text>
            </View>


            <View style={styles.viewQuestion}>
                <Text style={styles.question}>A empresa possui uma marca e Manual de Identidade Visual?</Text>
                <Text style={styles.answer}>[ {briefingData?.visualIdentityManual == VisualIdentityEnum.both ? "x" : "  "} ]&nbsp;&nbsp;{VisualIdentityEnum.both}</Text>
                <Text style={styles.answer}>[ {briefingData?.visualIdentityManual == VisualIdentityEnum.onlyBrand ? "x" : "  "} ]&nbsp;&nbsp;{VisualIdentityEnum.onlyBrand}</Text>
                <Text style={styles.answer}>[ {briefingData?.visualIdentityManual == VisualIdentityEnum.none ? "x" : "  "} ]&nbsp;&nbsp;{VisualIdentityEnum.none}</Text>
            </View>

            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Existem materiais de marketing disponíveis para analisarmos?</Text>
                <Text style={styles.answer}>[ {briefingData?.marketingMaterial == "yes" ? "x" : "  "} ]&nbsp;&nbsp;Sim, temos alguns materiais.</Text>
                <Text style={styles.answer}>[ {briefingData?.marketingMaterial == "no" ? "x" : "  "} ]&nbsp;&nbsp;Não.</Text>
            </View>

            <FooterPdf />
        </Page>
    );
}

export default PdfPage3;