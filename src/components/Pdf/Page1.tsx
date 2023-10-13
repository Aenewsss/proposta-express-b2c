import { IBriefing } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View, Font, Svg, Path, Defs, Stop, LinearGradient } from "@react-pdf/renderer";
import FooterPdf from "./Footer";

const PdfPage1 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ backgroundColor: "#191919", paddingHorizontal: 64, paddingTop: 50, position: "relative", color: "#fff", fontFamily: "DM-Sans", fontWeight: "normal" }}>
            <Image style={{ width: 126, height: 60 }} source="/pdf/logo-completa.png" />

            <View style={{ marginTop: 86, flexDirection: 'row' }}>
                <Svg width="5" height="273" viewBox="0 0 5 273" >
                    <Path d="M5 0L4.99999 273L-1.228e-08 273L1.19209e-05 -2.18556e-07L5 0Z" fill="url(#paint0_linear_9_642)" />
                    <Defs>
                        <LinearGradient id="paint0_linear_9_642" x1="0.624998" y1="273" x2="113.827" y2="214.152">
                            <Stop offset="0%" stopColor={briefingData?.brandColor || "#fff"} />
                            <Stop offset="100%" stopColor={`${briefingData?.brandColor || "#aaf"}33`} />
                        </LinearGradient>
                    </Defs>
                </Svg>

                <View style={{ marginLeft: 38 }}>
                    <Text style={{ fontSize: 22 }}>{briefingData?.customerName || "Empresa Teste"}</Text>
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

            <FooterPdf black={true} />
        </Page>
    );
}

export default PdfPage1;