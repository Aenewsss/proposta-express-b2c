import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View, Font, Svg, Path, Defs, Stop, LinearGradient } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

Font.register({
    family: 'DM-Sans', fonts: [
        {
            src: "/fonts/DMSans.ttf", fontWeight: "normal",
        },
        {
            src: "/fonts/DMSansBold.ttf", fontWeight: "bold"
        }
    ]
})
Font.register({ family: 'Plex-Sans', src: "/fonts/IBMPlexSans.ttf" })

const PdfPage1 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ backgroundColor: "#191919", paddingHorizontal: 64, paddingTop: 50, position: "relative", color: "#fff", fontFamily: "DM-Sans", fontWeight: "normal" }}>
            <Image style={{ width: 126, height: 60 }} source="/pdf/logo-completa.png" />

            <View style={{ marginTop: 86, flexDirection: 'row' }}>
                <Svg width="5" height="273" viewBox="0 0 5 273" >
                    <Path d="M5 0L4.99999 273L-1.228e-08 273L1.19209e-05 -2.18556e-07L5 0Z" fill="url(#paint0_linear_9_642)" />
                    <Defs>
                        <LinearGradient id="paint0_linear_9_642" x1="0.624998" y1="273" x2="113.827" y2="214.152">
                            <Stop offset="0%" stopColor="#4CD5B6" />
                            <Stop offset="100%" stopColor="#396D62" />
                        </LinearGradient>
                    </Defs>
                </Svg>

                <View style={{marginLeft: 38}}>
                    <Text style={{ fontSize: 22 }}>Ana Carolina</Text>
                    <Text style={{ fontSize: 88, textTransform: "uppercase", fontFamily: "Plex-Sans", lineHeight: 1, marginLeft: -6 }}>
                        Briefing Web
                    </Text>

                    <Text style={{ marginTop: 50, fontSize: 16 }}>O briefing é um conjunto de informações para auxiliar o desenvolvimento de seu projeto, com esta coleta de dados podemos
                        <Text style={{ fontWeight: "bold" }}>&nbsp;mapear melhor as expectativas do cliente.</Text>
                    </Text>
                    <Text style={{ marginTop: 20, fontSize: 16 }}>É uma peça fundamental para a elaboração de uma
                        proposta comercial e o planejamento de todas as etapas de desenvolvimento de acordo com as
                        <Text style={{ fontWeight: "bold" }}>&nbsp;necessidades do projeto/cliente.</Text>
                    </Text>
                </View>
            </View>

            <View style={{ position: "absolute", bottom: 30, left: 64, width: "100%" }}>
                <div style={{ width: "100%", height: 2, backgroundColor: "#fff" }}></div>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginTop: 6, alignItems: "center" }}>
                    <Text style={{ fontSize: 12, fontWeight: "normal" }}>{new Date().toLocaleDateString('pt-BR', { month: "long", day: "2-digit", year: "numeric" })}</Text>
                    <Image style={{ width: 40, height: 40 }} source="/pdf/logo.png" />
                </View>
            </View>
        </Page>
    );
}

export default PdfPage1;