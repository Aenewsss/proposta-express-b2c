import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import FooterPdf from "./Footer";
import { MarketTimeEnum } from "@components/enum/market-time.enum";
import { DifferentialsEnum } from "@components/enum/differentials.enum";

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

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "medium" }}>Qual o nome da empresa?</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>R: {briefingData?.customerName || "Nenhum"}</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "medium" }}>Qual o ramo de atuação?</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>Seja específico, ex: Psicologia Infantil</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>R: {briefingData?.customerName || "Nenhum"}</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "medium" }}>Estão nesse mercado a quantos anos?</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>[ {briefingData?.marketTime == MarketTimeEnum.upToOneYear ? "x" : ""} ]&nbsp;&nbsp;Até um ano</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>[ {briefingData?.marketTime == MarketTimeEnum.upToFourYears ? "x" : ""} ]&nbsp;&nbsp;2 à 4 anos</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>[ {briefingData?.marketTime == MarketTimeEnum.moreThanFiveYears ? "x" : ""} ]&nbsp;&nbsp;mais de 5 anos</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>[ {briefingData?.marketTime == MarketTimeEnum.moreThanTenYears ? "x" : ""} ]&nbsp;&nbsp;mais de 10 anos</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "medium" }}>Escreva uma breve história da empresa:</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>R: {briefingData?.customerName || "Nenhum"}</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "medium" }}>Que tipo de produtos ou serviços sua empresa oferece?</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>R: {briefingData?.customerName || "Nenhum"}</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: "medium" }}>O que diferencia seu negócio de seus concorrentes?</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>[ {briefingData?.differentials == DifferentialsEnum.price ? "x" : ""} ]&nbsp;&nbsp;Preço</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>[ {briefingData?.differentials == DifferentialsEnum.quality ? "x" : ""} ]&nbsp;&nbsp;Qualidade</Text>
                <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "normal", opacity: 0.8 }}>[ {briefingData?.differentials == DifferentialsEnum.services ? "x" : ""} ]&nbsp;&nbsp;Serviços</Text>
            </View>

            <FooterPdf />
        </Page>
    );
}

export default PdfPage2;