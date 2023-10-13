import { IBriefing } from "@components/store/types";
import { Page, Text, View } from "@react-pdf/renderer";
import FooterPdf from "./Footer";
import { PersonalitiesEnum } from "@components/enum/personalities.enum";
import styles from "./styles";
import { VisualIdentityEnum } from "@components/enum/visual-identity-manual.enum";

const PdfPage4 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ color: "#000", fontFamily: "DM-Sans", fontWeight: "normal", paddingTop: 56, paddingHorizontal: 64, position: 'relative' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ width: 32, height: 29, backgroundColor: '#111629', alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: '#fff', fontWeight: "semibold", fontSize: 16 }}>03</Text>
                </View>
                <Text style={{ color: "#111629", fontWeight: "semibold", fontSize: 20 }}>Púbico Alvo</Text>
            </View>

            <View style={{ marginTop: 22, width: 492, height: 1, backgroundColor: "#00000022" }}></View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>O que você já sabe sobre o público que pretende atingir com website?</Text>
                <Text style={styles.answer}>Descreva o máximo que você puder: gênero, idade, nacionalidade, humor, profissão, formação, classe social, hábitos de consumo, estilo de vida, etc.</Text>
                <Text style={styles.answer}>R: {briefingData?.aboutPublicTarget || "Nenhum"}</Text>
            </View>
            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Por que esse público precisa do seu site?</Text>
                <Text style={styles.answer}>R: {briefingData?.whyPublicNeedWebsite || "Nenhum"}</Text>
            </View>
            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Qual a relações do público com a marca? Como ela consome sua marca?</Text>
                <Text style={styles.answer}>R: {briefingData?.publicRelationshipWithBrand || "Nenhum"}</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 60 }}>
                <View style={{ width: 32, height: 29, backgroundColor: '#111629', alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: '#fff', fontWeight: "semibold", fontSize: 16 }}>04</Text>
                </View>
                <Text style={{ color: "#111629", fontWeight: "semibold", fontSize: 20 }}>Sobre o Projeto</Text>
            </View>

            <View style={{ marginTop: 22, width: 492, height: 1, backgroundColor: "#00000022" }}></View>

            <View style={styles.viewQuestion}>
                <Text style={styles.question}>Qual o endereço do site atual?</Text>
                <Text style={styles.answer}>R: {briefingData?.currentSite || "Nenhum"}</Text>
            </View>

            <FooterPdf />
        </Page>
    );
}

export default PdfPage4;