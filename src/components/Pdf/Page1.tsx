import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const PdfPage1 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ backgroundColor: "#191919", paddingHorizontal: 64, paddingTop: 50, position: "relative", color: "#fff" }}>
            <Image style={{ width: 126, height: 60 }} source="/pdf/logo-completa.png" />

            <View style={{ marginTop: 86 }}>
                <Text style={{ fontSize: 22 }}>Ana Carolina</Text>
                <Text style={{ marginTop: 12, fontSize: 88, fontWeight: "black", textTransform: "uppercase" }}>
                    Briefing Web
                </Text>

                <Text style={{ marginTop: 50, fontSize: 16, fontWeight: "medium" }}>O briefing é um conjunto de informações para auxiliar
                    o desenvolvimento de seu projeto, com esta coleta de dados podemos
                    <Text style={{ fontWeight: "black" }}>&nbsp;mapear melhor as expectativas do cliente.</Text>
                </Text>
                <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "black" }}>É uma peça fundamental para a elaboração de uma
                    proposta comercial e o planejamento de todas as etapas de desenvolvimento de acordo com as necessidades do projeto/cliente.</Text>
            </View>

            <View style={{ position: "absolute", bottom: 30, left: 64, width: "100%" }}>
                <div style={{ width: "100%", height: 2, backgroundColor: "#fff" }}></div>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row",marginTop: 6, alignItems:"center" }}>
                    <Text style={{ fontSize: 12 }}>{new Date().toLocaleDateString('pt-BR', { month: "long", day: "2-digit", year: "numeric" })}</Text>
                    <Image style={{ width: 40, height: 40 }} source="/pdf/logo.png" />
                </View>
            </View>
        </Page>
    );
}

export default PdfPage1;